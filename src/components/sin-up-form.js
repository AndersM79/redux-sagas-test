import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    form: {
        width: 500
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
        flexGrow: 1,
        margin: 0
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class TextFields extends React.Component {
    state = {
        name: '',
        password: ''
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    const
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <Grid container>
                        <form
                            className={classes.form}
                            noValidate
                            autoComplete="off"
                            className={classes.margin}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={this.props.doLogOut}
                                >
                                    CANCELAR
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.props.doLogin(this.state.name, this.state.password)}
                                >
                                    SINGUP
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </div>
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);