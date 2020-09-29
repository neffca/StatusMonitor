import React from 'react';
import PropTypes from 'prop-types';

import {style, classes} from './Header.st.css';

class Header extends React.Component {

  static propTypes = {
    time: PropTypes.string
  }

  render(){
    return (
      <div className={style(classes.root,{
        time: this.props.time
      })}>
      </div>
    );
  }
}

export default Header;
