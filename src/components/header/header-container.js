import { connect } from 'react-redux';

import Header from './header-component';
import { doLogin, doLogOut } from '../../utils/user-domain';

const handleLogin = (event) => {
    event.preventDefault();
    console.log('DoLogin..');
    this.props.doLogin();
};

const handleLogOut = (event) => {
    event.preventDefault();
    console.log('DoLogout..')
    this.props.doLogOut();
}

const mapDispatchToProps = dispatch => ({
    doLogin: () => dispatch(doLogin),
    doLogOut: () => dispatch(doLogOut),
});

const mapStateToProps = state => ({
    labels: state.labels.header,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Header) 