import React, { Component } from 'react';
import ContactPage from '../component/ContactPage'

class Fourth extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {<ContactPage />}
        </div>
      </div>
    );
  }
}

export default Fourth;
