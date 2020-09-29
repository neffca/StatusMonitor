import React from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect} from 'react-router-dom';

import StatusUpdatePage from './scripts/components/pages/statusupdate/StatusUpdatePage';
import StatusGraphPage from './scripts/components/pages/statusgraph/StatusGraphPage';

import {style, classes} from './App.st.css';

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log('here');
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    console.log('response', response);
    const body = await response.json();

    if (response.status !== 200) {
      console.log('error');
      throw Error(body.message) 
    }
    console.log('body', body);
    return body;
  };

  render(){
  return (
    <div className={style(classes.root,{})}>
      <Router>
          <Switch>
            <Route exact path='/survey' component={StatusUpdatePage}/>
            <Route exact path='/home' component={StatusGraphPage}/>
            <Redirect exact from="/" to="/home" />
          </Switch>
      </Router>
    </div>
  );
}
}

export default App;
