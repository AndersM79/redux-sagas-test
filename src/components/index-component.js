import React from 'react'
import { connect } from 'react-redux';

import { startBackground, stopBackground, } from '../utils/background-domain';
import Header from './header/header-container';
import Login from './login/login-component';

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


    handleStartBackground = (event) => {
        event.preventDefault();
        console.log('start background..');
        this.props.doStartBackground();
    }

    handleStopBackground = (event) => {
        event.preventDefault();
        console.log('stop background..');
        this.props.doStopBackground();
    }

    render() {
        return (
            <div>
                <Header />
                <Login />
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
    doStartBackground: () => dispatch(startBackground),
    doStopBackground: () => dispatch(stopBackground),
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponen);


