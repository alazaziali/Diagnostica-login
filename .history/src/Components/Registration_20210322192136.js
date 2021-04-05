import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../logos/DiagnosticaSampleLogo.svg';


// import React, { Component } from 'react'
// // import PropTypes from 'prop-types'
// import '../App.css';
// import { Button, Form, Col } from 'react-bootstrap';
// import Logo from '../logos/DiagnosticaSampleLogo.svg';
// import GoogleLogin, { useGoogleLogin } from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

// class Registration extends Component {


//     render() {

//         const onSuccess = (res) => {
//             console.log('Login Success currentUser', res.profileObj);
//         }

//         const onFailure = (res) => {
//             console.log('Login failed currentUser', res);
//         }

//         const responseGoogle = (response) => {
//             console.log(response);
//         }

//         const responseFacebook = (response) => {
//             console.log(response);
//         }

//         return (

//             <div className="loginContainer">

//                 <div className="loginForm">
//                     <p>Welcome to</p>
//                     <img className="logo" src={Logo} alt="Diagnostica-Logo"></img>
//                     <p>Thank you for trusting us! 🙌</p>
//                     <Form>
{/* <Form.Row>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Form.Group id="submits">

                        <FacebookLogin
                            cssClass="fb"
                            appId="121127359789175"
                            autoLoad
                            callback={responseFacebook}
                            textButton="Register with Facebook"
                            render={renderProps => (
                                <button onClick={renderProps.onClick}>This is my custom FB button</button>
                            )}
                        />
                        {/* <br /> */}


{/* <googleButton /> */ }
{/* <googleButton /> */ }
//                     </Form>
//                 </div>

//             </div>

//         )
//     }
// }

// export default Registration






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




class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }
    passwordVisibility = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
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
    render() {

        const { formErrors, showPassword } = this.state;
        return (

            <div>

                <form onSubmit={this.handleSubmit} className="loginForm" noValidate>
                    <img className="logo" src={Logo} alt="" />

                    <div className="textInput wcard">

                        <input
                            className={formErrors.firstName.length > 0 ? "error" : null}
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )}
                    </div>
                    <div className="textInput wcard">

                        <input
                            className={formErrors.lastName.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )}
                    </div>
                    <div className="textInput wcard">

                        <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="textInput wcard">

                        <input
                            className={formErrors.password.length > 0 ? "error" : null}
                            placeholder="Password"
                            type={(showPassword) ? "text" : "password"}
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                        />
                        <span className="Eye"><i className="fas fa-eye pass-icon" onClick={this.passwordVisibility}></i></span>

                        {formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )}
                    </div>
                    <div className="column">
                        <div className="col wcard social">
                            <input className="btn"
                                type="submit"
                                name=""
                                value="Create Account"
                                noValidate />
                        </div>
                        <div className="col wcard social">
                            <Link to='/Login' className="white-text">Already Have an Account?</Link>
                        </div>

                    </div>

                </form>
            </div>

        )
    }
}








export default Registration
