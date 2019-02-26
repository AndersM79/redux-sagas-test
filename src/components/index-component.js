import React from 'react'
import { connect } from 'react-redux';
import AppTheme from 'docs/src/modules/components/AppTheme';

import Header from '../containers/header';
import Login from '../containers/sing-up';

class IndexComponen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(users => {
                users.results.forEach(user => {
                    let data = {
                        name: user.name.first,
                        email: user.email,
                        password: user.login.password
                    }
                    this.setState({
                        users: this.state.users.concat([data])
                    })
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Login />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponen);


