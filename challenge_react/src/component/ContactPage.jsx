import React from 'react';
import '../assets/css/bootstrap.min.css'
import '../assets/css/main.css';
import logo from '../assets/img/page3/logo1.png'

class ContactPage extends React.Component {
    render (){
        return (
            <html className='page4'>
        <div class="container-fluid">
            <div class="gambar">
                <div class="row h-100">
                    <div class="col-5">
                        <div class="img-logo">
                            <div class="overlay"></div>
                            <img src={logo} />
                        </div>
                    </div>
                    <form action="home.html">
                        <div class="col-7">
                            <div class="kedua">
                                <h5>Contact Us</h5>
                                <div class="input">
                                    <div>
                                        <label for="fullname">Full Name<sup class="star">*</sup></label><br />
                                        <input type="text" name="fullname" placeholder="Full Name..." required/><br/>
                                    </div>
                                    <div>
                                        <label for="email">Email Address<sup class="star">*</sup></label><br />
                                        <input type="email" name="email" placeholder="example@alterra.id" required/><br />
                                    </div>
                                    <div>
                                        <label for="phone">Phone Number<sup class="star">*</sup></label><br />
                                        <input type="tel" name="phone" pattern="^[0][0-9]{6,12}" placeholder="085554447900" required/><br/>
                                    </div>  
                                </div>
                                <div>
                                    <label for="role">Role:</label><br/>
                                    <select name="role" class="role">
                                        <option value="select"><sup class="blur">selected..</sup></option>
                                        <option value="fullsatck">FULL-STACK ENGINEER</option>
                                        <option value="fronten">FRONTEND ENGINEER</option>
                                        <option value="uiuxdesigner">UI/UX Designer</option>
                                    </select>
                                </div>
                                <div class="bio">
                                    <label for="message">Message:</label><br/>
                                    <input type="text" name="message" /><br />
                                </div>
                                <div class="submit"><br />
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </html>
        )
    }
}

export default ContactPage;