import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css'
import logo from '../assets/img/page1/logo.png'
import '../'

class Header extends React.Component {
    render (){
        return (
                <header>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-12">
                        <a href="">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-6">
                        <nav className="button1">
                            <ul className="nav-list list-unstyled">
                                <li>
                                    <a className="home" href="">HOME</a>
                                </li>
                                <li>
                                    <a href="">ABOUT</a>
                                </li>
                                <li>
                                    <a href="">EXPERIENCE</a>
                                </li>
                                <li>
                                    <a href="">CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
            </header>
        )
    }
}

export default Header;