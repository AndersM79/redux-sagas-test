import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Spinner = (props) => {
    if (props.isSpinnerActive === false) {
        return null
    } else {
        return (
            <div>
                <FontAwesomeIcon
                    icon='spinner'
                    spin />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isSpinnerActive: state.ui.spinnerActive,
});

export default connect(mapStateToProps, null)(Spinner);