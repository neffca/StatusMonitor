import React from 'react';
import { connect } from 'react-redux';

import StatusUpdateItem from './StatusUpdateItem';

import { updateStatus } from '../../actions/statusAction';
import { statusTypes } from '../../constants/status-types';

class StatusUpdatePage extends React.Component {

  constructor() {
    super();

    this._handleTap = this._handleTap.bind(this);
  }

  _handleTap(status){
    console.log(this.props.statuses);
    this.props.updateStatus(status);
  }

  _renderStatuses() {
    return Object.values(statusTypes).map((status) => {
      return (
          <StatusUpdateItem
            key={status+'-item'}
            onTap={this._handleTap}
            status={status}
            />
      );
    });
  }
  render() {
    return (
      <div>
        {this._renderStatuses()}
      </div>
    );
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
