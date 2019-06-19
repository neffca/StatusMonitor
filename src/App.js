import React from 'react';

import StatusUpdatePage from './scripts/pages/statusupdate/StatusUpdatePage';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        {"How are you today?"}
        </h1>
        <StatusUpdatePage />
      </header>
    </div>
  );
}

export default App;
