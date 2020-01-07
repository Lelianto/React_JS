import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'
import logo from '../images/react.svg'
import logo_search from '../images/search.png'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios'
import PropTypes from "prop-types";

const listCategory = ['sport','business','health']

class Header extends React.Component {

    handleSignOut = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
      };

    render (){
        const { clickTab } = this.props
        return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <img className="logo-react" src={logo} alt="" />
                    </div>
                    <div className="col-md-1 logo-name">
                        <Link to='/'> 
                        <h4 style={{ textDecoration:"none", color:'black'}}>KabarKabar</h4>
                        </Link>
                    </div>
                    <div className="col-md-4 category">
                        <nav>
                            <ul className="list-unstyled">
                                {listCategory.map(category=>
                                <li onClick={event => this.props.handleCategory(category)} className="navi"> 
                                  <Link>{category}</Link></li>
                                )}
                                <li className="navi">
                                    <Link to='/Profile'>Profile</Link></li>
                                <li className="navi">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            <a href="">Lainnya</a></button>
                                        <div class="dropdown-content">
                                            <Link to='/lainnya/Bisnis'>Bisnis</Link>
                                            <Link to='/lainnya/Pendidikan'>Pendidikan</Link>
                                            <Link to='/lainnya/Pemerintahan'>Pemerintahan</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3 search">
                        
                        <div className="active-cyan-4 mb-4">
                            <input 
                            className="form-control" 
                            style={{ backgroundColor:'white', border:'1px gray solid', marginRight:'-60px'}} 
                            type="text" 
                            onChange={event => this.props.handleSearch(event)}
                            placeholder='Search'
                            aria-label="Search" />
                        </div>

                    </div>
                    <div className="col-md-1">
                        <img className="search1" src={logo_search} alt=""/>
                    </div>
                    <div className="col-md-2 user_in">
                        <nav>
                            <ul className="list-unstyled navigate">
                                <li className="navi1">
                                    <Link to="/SignIn">Masuk</Link></li>
                                <li className="navi1">
                                    <Link to='/' 
                                    onClick={() => this.handleSignOut()}>Keluar</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;