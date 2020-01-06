import React, { Component } from 'react';
import Header from '../component/Header'
import UnderHeader from '../component/UnderHeader'
import SecondPage from '../component/SecondPage'
import Footer from '../component/Footer'

class Second extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {<Header />}
        </div>
        <div className="App-intro">
          {<UnderHeader />}
        </div>
        <div className="App-intro">
          {<SecondPage />}
        </div>
        <div className="App-intro">
          {<Footer />}
        </div>
      </div>
    );
  }
}

export default Second;
