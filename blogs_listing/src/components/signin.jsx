import React from 'react';
import '../styles/main-2.css';
import '../styles/bootstrap.min.css'
import axios from 'axios';
import logo from '../images/logo.svg'

class SignIn extends React.Component {
    state = { Email: "", password: "" };

    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const mydata = {
            username: username,
            password: password
        };
        const self=this;
        axios
            .post("https://myendpoint.free.beeceptor.com/signin", mydata)
            .then(response => {
                console.warn('cek this', this)
                console.log(response.data);
                if (response.data.hasOwnProperty("accKey")) {
                localStorage.setItem("accKey", response.data.accKey);
                localStorage.setItem("is_login", true);
                localStorage.setItem("email", 'lian@alterra.id');
                localStorage.setItem("username", response.data.username);
                console.log(self.props)
                self.props.history.push("/");
                }
        })
            .catch(error => {
                console.log("ini Error", error);
        });
    };

    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* <!-- Tabs Titles --> */}

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                <img src={logo} id="icon" alt="User Icon" />
                </div>

                    {/* <!-- Login Form --> */}
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                        type="text" 
                        id="login" 
                        className="fadeIn second" 
                        name="login" 
                        placeholder="Masukkan username"
                        onChange={e => this.changeInput(e)} />
                        <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="Masukkan password"
                        onChange={e => this.changeInput(e)} />
                        <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Masuk" 
                        onClick={() => this.postLogin()}/>
                    </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
            </div>
        )
    }
}

export default SignIn;