import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import UploadComponent from './components/upload.component';

class App extends Component {
  render() {
    return (
      <div className="App container mt-5">
          <UploadComponent />
      </div>
    );
  }
}

export default App; 