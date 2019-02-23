import React from 'react'
import { connect } from 'react-redux';

import { doLogin, doLogOut } from '../utils/user-domain';

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

    handleLogin = (event) => {
        event.preventDefault();
        console.log('DoLogin..');
        this.props.doLogin();
    };

    handleLogOut = (event) => {
        event.preventDefault();
        console.log('DoLogout..')
        this.props.doLogOut();
    }

    render() {
        return (
            <div>
                <form>
                    user <input type="text" />
                    password <input type="text" />
                    <button
                        onClick={this.handleLogin}
                    >
                        Login
                    </button>
                    <button
                        onClick={this.handleLogOut}
                    >
                        Logout
                    </button>
                </form>
                <ul>
                    {
                        this.state.users.map(user =>
                            <React.Fragment key={user.name}>
                                <li>
                                    {user.name}
                                </li>
                                <li>
                                    {user.email}
                                </li>
                            </React.Fragment>
                        )}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    doLogin: () => dispatch(doLogin),
    doLogOut: () => dispatch(doLogOut),
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponen);


