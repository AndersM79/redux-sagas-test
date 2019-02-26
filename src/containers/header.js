import { connect } from 'react-redux';

import Header from '../components/header-layout';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
    labels: state.labels.header,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Header) 