import React, { useState } from 'react';
import '../App.css';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
// import logo from '../resources/logos.png';
import { Link } from 'react-router-dom';
// import 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login'
// import { Button, Form } from 'react-bootstrap';

const Login = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showPassword: false,
    //         email: '',
    //         password: ''
    //     }
    // }
    const [Showpassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const passwordVisibility = () => {
        // const showPassword = ;
        setShowPassword(!Showpassword);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleEmail = text => {
        setEmail(text.target.value);
    }

    const handlePassword = text => {
        setPassword(text.target.value);
    }

    const login = () => {
        console.log("Done", handleEmail.text, handlePassword.text);
        // let checkIn = {}
        // checkIn.email = this.state.email
        // checkIn.password = this.state.password

        // return fetch('http://localhost:8080/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ checkIn })
        // })
        //     .then(data => data.json())
    }

    // async function loginUser(credentials) {
    //     return fetch('http://localhost:8080/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(credentials)
    //     })
    //       .then(data => data.json())
    //    }

    // handleChange = input => e => {
    //     this.state({ [input]: e.target.value })
    // }
    // showError = (input, message) => {
    //     const textInput = input.parentElement;
    //     textInput.className = 'textInput error';
    //     const small = textInput.querySelector('small');
    //     small.innerHTML = message;

    // }

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //       username,
    //       password
    //     });
    //     setToken(token);
    //   }

    // const handleSubmit = async e => {
    //     console.log('Submit');
    // }




    // const { showPassword } = this.state;
    return (
        <div className="loginContainer">
            <div className="loginForm">
                <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
                <p>Thank you for trusting us! 🙌</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="textInput ">
                        <input
                            type="email"
                            placeholder="Email"
                            name=""
                            className="input"
                            value={email}
                            onChange={handleEmail}
                            noValidate />
                        <small>Error message</small>
                    </div>
                    <div className="textInput ">
                        <input
                            type={(Showpassword) ? "text" : "password"}
                            placeholder="Password"
                            name=""
                            id="myPassword"
                            className="input"
                            value={password}
                            onChange={handlePassword}
                            noValidate />
                        <small>Error message</small>
                        <span className="Eye"><i className="fas fa-eye pass-icon" onClick={passwordVisibility}></i>
                        </span>

                    </div>
                    <div>

                        <input type="checkbox" id="" />
                        <label className="ml-1 text-dark" >Remember me</label>
                    </div>



                    <div className="loginFormbuttons">
                        <input className="btn"
                            type="submit"
                            name=""
                            value="Login"
                            onClick={() => { login() }}
                            noValidate />

                        <Link to="ForgetPassword" className="btn">Forgot Password </Link>

                    </div>


                    <div className="loginFormbuttons">
                        <Link to='/' className="link">
                            Didn't have account yet?
            </Link>
                    </div>

                </form>
            </div>
        </div>

    )
}


export default Login


