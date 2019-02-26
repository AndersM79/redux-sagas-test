import { connect } from 'react-redux';

import LoginForm from '../components/sin-up-form';
import { actions } from "../actions/user-actions";

const mapDispatchToProps = dispatch => ({
    doLogin: (user, password) => dispatch(actions.login(user, password)),
    doLogOut: () => dispatch(actions.logOut()),
});

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(LoginForm) 