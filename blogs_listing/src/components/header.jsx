import React from 'react';
import '../styles/main.css';
import '../styles/bootstrap.min.css'
import logo from '../images/react.svg'
import logo_search from '../images/search.png'


class Header extends React.Component {
    render (){
        return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                        <img className="logo-react" src={logo} alt="" />
                    </div>
                    <div className="col-md-1 logo-name">
                        <h4>KabarKabar</h4>
                    </div>
                    <div className="col-md-4 category">
                        <nav>
                            <ul className="list-unstyled">
                                <li className="navi">
                                    <a href="">SepakBola</a></li>
                                <li className="navi">
                                    <a href="">Ekonomi</a></li>
                                <li className="navi">
                                    <a href="">Politik</a></li>
                                <li className="navi">
                                    <a href="">Hiburan</a></li>
                                <li className="navi">
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        <a href="">Lainnya</a></button>
                                    <div class="dropdown-content">
                                        <a href="#">Bisnis</a>
                                        <a href="#">Pendidikan</a>
                                        <a href="#">Pemerintahan</a>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3 search">
                        <div className="active-cyan-4 mb-4">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                    <div className="col-md-1">
                        <img className="search1" src={logo_search} alt=""/>
                    </div>
                    <div className="col-md-2 user_in">
                        <nav>
                            <ul className="list-unstyled navigate">
                                <li className="navi1">
                                    <a href="">Masuk</a></li>
                                <li className="navi1">
                                    <a href="">Daftar</a></li>
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