import React, { Component } from 'react';
import Header from '../components/header'
import SignIn from '../components/signin'

class Masuk extends Component {
    
      render() {
          return (
            <div>
                <Header/>
                <SignIn {...this.props}/>
              </div>
            )
            };
      }

export default Masuk;
