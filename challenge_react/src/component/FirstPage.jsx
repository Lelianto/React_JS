import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css'
import photo from '../assets/img/page1/photo.png'

class FirstPage extends React.Component {
    render (){
        return (
            <div >
                <body >
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <a href="">
                                <img src={photo}/>
                            </a>
                        </div>
                        <div className="col-lg-7" style={{paddingLeft:'90px'}}>
                            <p className="intro">
                                Hi, my name is 
                            </p>
                            <p className="intro1">
                                Anne Sullivan 
                            </p>
                            <p className="intro2"> 
                                I build things for the web
                            </p>
                            <p>
                                <a className= "button" href="contact.html" target="">Get In Touch</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
        )
    }
}

export default FirstPage;