// import React from 'react'
// import Logo from '../logos/DiagnosticaSampleLogo.svg';
// import '../App.css';
// import 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login'
// import { Button, Form } from 'react-bootstrap';

// const Login = () => {
//     const responseFacebook = (response) => {
//         console.log(response);
//     }
//     return (
//         <div className="loginContainer">

//             <div className="loginForm">
//                 <p>Welcome to</p>
//                 <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
//                 <p>Thank you for trusting us! 🙌</p>
//                 <Form>
//                     <Form.Group className="formGroup" controlId="formBasicUsername">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="text" placeholder="Enter username" />
//                         <Form.Text className="text">
//                             We'll never share your email with anyone else. 🤝
//                       </Form.Text>
//                     </Form.Group>

//                     <Form.Group className="formGroup" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group className="formGroup" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group controlId="formBasicCheckbox">
//                         <Form.Check className="rememberMe" type="checkbox" label="Remember me" />
//                     </Form.Group>
//                     <div className="">
//                         <Button variant="primary" type="submit">
//                             Login
//                     </Button>
//                     </div>
//                     <div className="forgotBtn">
//                         <Button variant="primary" type="submit">
//                             Forgot Password? 😢
//                     </Button>
//                     </div>
//                 </Form>







//             </div>
//             <FacebookLogin
//                 appId="121127359789175"
//                 autoLoad
//                 callback={responseFacebook}
//                 render={renderProps => (
//                     <button onClick={renderProps.onClick}>This is my custom FB button</button>
//                 )}
//             />
//         </div >
//     )
// }

// export default Login;


import React, { Component } from 'react';
import '../App.css';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
// import logo from '../resources/logos.png';
import { Link } from 'react-router-dom';

// import 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login'
// import { Button, Form } from 'react-bootstrap';

class Login extends Component {
    state = {
        showPassword: false
    }
    passwordVisibility = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword });
    }

    handleSubmit = e => {
        e.preventDefault();
    }
    // handleChange = input => e => {
    //     this.state({ [input]: e.target.value })
    // }
    // showError = (input, message) => {
    //     const textInput = input.parentElement;
    //     textInput.className = 'textInput error';
    //     const small = textInput.querySelector('small');
    //     small.innerHTML = message;

    // }



    render() {
        const { showPassword } = this.state;
        return (
            <div className="loginContainer">
                <div className="loginForm">
                    <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
                    <p>Thank you for trusting us! 🙌</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="textInput ">
                            <input
                                type="text"
                                placeholder="Username"
                                name=""
                                className="input"
                                noValidate />
                            <small>Error message</small>
                        </div>
                        <div className="textInput ">
                            <input
                                type={(showPassword) ? "text" : "password"}
                                placeholder="Password"
                                name=""
                                id="myPassword"
                                className="input"
                                noValidate />
                            <small>Error message</small>
                            <span className="Eye"><i className="fas fa-eye pass-icon" onClick={this.passwordVisibility}></i>
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
}

export default Login


