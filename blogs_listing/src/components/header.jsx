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
                                <li className="navi">SepakBola</li>
                                <li className="navi">Ekonomi</li>
                                <li className="navi">Politik</li>
                                <li className="navi">Hiburan</li>
                                <li className="navi">
                                    <div className="btn-group">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Lainnya
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">SepakBola</a>
                                            <a className="dropdown-item" href="#">Ekonomi</a>
                                            <a className="dropdown-item" href="#">Politik</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Hiburan</a>
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
                                <li className="navi1">Masuk</li>
                                <li className="navi1">Daftar</li>
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