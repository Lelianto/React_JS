import React, { Component } from 'react';
import Header from '../component/Header'
import FirstPage from '../component/FirstPage'


class First extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {<Header />}
        </div>
        <div className="App-intro">
          {<FirstPage />}
        </div>
      </div>
    );
  }
}

export default First;
