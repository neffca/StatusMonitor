import React from 'react';
import { Link } from 'react-router-dom'

class StatusGraphPage extends React.Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div>
        {"graph"}
          <br />
          <Link to="/survey" >
            Take the survey
          </Link>
      </div>
    );
  }
}

export default StatusGraphPage;
