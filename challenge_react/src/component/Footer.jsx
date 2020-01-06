import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css'
import logo from '../assets/img/page2/logo.png'
import fb from '../assets/img/footer/sm-fb.png'
import tw from '../assets/img/footer/sm-tw.png'
import ig from '../assets/img/footer/sm-ig.png'
import lin from '../assets/img/footer/sm-in.png'

class Footer extends React.Component {
    render (){
        return (
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-2 foot1">
                        <a href="">
                            <img src={logo}/>
                        </a>
                    </div>
                    <div className="col-md-3 col-1">
    
                    </div>
                    <div className="col-md-3 col-5 foot2">
                        <p className="social">
                            Social Media
                        </p>
                        <p>
                            <a href="">
                                    <img className="img-f" src={fb}/>
                                </a>
                            <a href="">
                                    <img className="img-f" src={tw}/>
                                </a>
                            <a href="">
                                    <img className="img-f" src={ig}/>
                                </a>
                            <a href="">
                                    <img className="img-f" src={lin}/>
                                </a>
                        </p> 
                    </div>
                    <div className="col-md-3 col-4 foot3" style={{marginLeft:'30px',paddingLeft: '120px'}}>
                        <p>
                            copyright @ 2019 Alterra
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;