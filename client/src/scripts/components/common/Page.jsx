import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header.jsx'
import {style, classes} from './Page.st.css';

const NOON = 12;
const NIGHT = 21;

class Page extends React.Component {
  static displayName = 'Page';

  static propTypes = {
    children: PropTypes.node
  }

  _getTime(){
      const date = new Date();
      const hour = date.getHours();
      if(hour < NOON){
        return "morning";
      }
      if(hour < NIGHT){
        return "afternoon";
      }

      return "evening";
  }

  render(){
    const time = this._getTime();
    return (
      <div className={style(classes.root,{
          time: time
        })}>
        <Header
          time={time}
          />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
