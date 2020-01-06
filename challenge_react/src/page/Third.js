import React, { Component } from 'react';
import Header from '../component/Header'
import UnderHeader from '../component/UnderHeader'
import ThirdPage from '../component/ThirdPage'
import Footer from '../component/Footer'

class Third extends Component {
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
          {<ThirdPage />}
        </div>
        <div className="App-intro">
          {<Footer />}
        </div>
      </div>
    );
  }
}

export default Third;
