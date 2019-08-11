import React from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect} from 'react-router-dom';

import StatusUpdatePage from './scripts/components/pages/statusupdate/StatusUpdatePage';
import StatusGraphPage from './scripts/components/pages/statusgraph/StatusGraphPage';

import {style, classes} from './App.st.css';

class App extends React.Component {

  render(){
  return (
    <div className={style(classes.root,{})}>
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
