import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { updateStatus } from "../../actions/statusAction";

class StatusUpdatePage extends React.Component {

  constructor() {
    super();

    this._handleTap = this._handleTap.bind(this);
  }

  _handleTap(){
    //this.props.updateStatus();
  }
  render() {
    return (
      <p
        onClick={this._handleTap}
        >
        {'Selection'}
      </p>
    )
  }
}

function mapStateToProps(state) {
  return {
  ...state
  }
};

function mapDispatchToProps(dispatch) {
  return {
    updateStatus: status => dispatch(updateStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusUpdatePage);
