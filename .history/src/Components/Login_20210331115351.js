
import React, { Component } from 'react';
import '../App.css';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
// import logo from '../resources/logos.png';
import { Link } from 'react-router-dom';
// import 'react-bootstrap';
// import FacebookLogin from 'react-facebook-login'
// import { Button, Form } from 'react-bootstrap';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            email: null,
            password: null,
            formErrors: {
                emails: "",
                passwords: ""
            }
        }
    }
    passwordVisibility = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword });
    }


    // handleSubmit = e => {
    //     e.preventDefault();
    // }
    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
          --SUBMITTING--
          Email: ${this.state.emails}
          Password: ${this.state.passwords}
        `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleEmail(text) {
        this.setState({ email: text.target.value })
    }

    handlePassword(text) {
        this.setState({ password: text.target.value })
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    login() {
        console.log("Done", this.state.email, this.state.password);
        //     let checkIn = {}
        //     checkIn.email = this.state.email
        //     checkIn.password = this.state.password

        //     return fetch('http://localhost:8080/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ checkIn })
        //     })
        //         .then(data => data.json())
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



    render() {
        const { formErrors, showPassword } = this.state;
        // const { emailRegex, formValid, handleSubmit, handleChange, email } = this.props;
        return (
            <div className="loginContainer">
                <div className="loginForm">
                    <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
                    <p>Thank you for trusting us! 🙌</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="textInput ">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className={formErrors.emails.length > 0 ? "error" : null}

                                value={this.state.email}
                                onChange={(text) => { this.handleEmail(text) },
                                    this.handleChange}
                                noValidate />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="textInput ">
                            <input
                                type={(showPassword) ? "text" : "password"}
                                placeholder="Password"
                                name=""
                                id="myPassword"
                                className="input"
                                value={this.state.password}
                                onChange={(text) => { this.handlePassword(text) }}
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
                                onClick={() => { this.login() }}
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