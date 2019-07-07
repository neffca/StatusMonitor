import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
        <Link to="/home" >
          <StatusUpdateItem
            key={status+'-item'}
            onTap={this._handleTap}
            status={status}
            />
          </Link>
      );
    });
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>
          {"How are you today?"}
          </h1>
          {this._renderStatuses()}
        </header>
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
