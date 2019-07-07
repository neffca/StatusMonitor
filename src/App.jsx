import React from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect} from 'react-router-dom';

import StatusUpdatePage from './scripts/pages/statusupdate/StatusUpdatePage';
import StatusGraphPage from './scripts/pages/statusgraph/StatusGraphPage';

import {style, classes} from './App.st.css';

class App extends React.Component {

  _getTime(){
    const date = new Date();
    const hour = date.getHours();
    if(hour < 12){
      return "morning";
    }
    if(hour < 18){
      return "afternoon";
    }

    return "evening";
  }

  render(){
  return (
    <div className={style(classes.root,{
        time: this._getTime()
      })}>
      <Router>
          <Switch>
            <Route exact path='/survey' component={StatusUpdatePage}/>
            <Route exact path='/home' component={StatusGraphPage}/>
          </Switch>
          <Redirect from="/" to="/home" />
      </Router>
    </div>
  );
}
}

export default App;
