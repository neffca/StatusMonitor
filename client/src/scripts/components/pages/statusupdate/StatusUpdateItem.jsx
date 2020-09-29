import React from 'react';
import PropTypes from 'prop-types';

import { statusText } from '../../../constants/status-types';

import {style, classes} from './StatusUpdateItem.st.css';

class StatusUpdateItem extends React.Component {

  static displayName = 'StatusUpdateItem';

  static propTypes = {
    onTap: PropTypes.func,

    status: PropTypes.number
  }

  constructor() {
    super();

    this._handleTap = this._handleTap.bind(this);
  }

  _handleTap(){
    if(this.props.onTap){
      this.props.onTap(this.props.status);
    }
  }

  render() {
    return (
      <p
        className={style(classes.root,{})}
        onClick={this._handleTap}
        >
        {statusText[this.props.status]}
      </p>
    );
  }
}

export default StatusUpdateItem;
