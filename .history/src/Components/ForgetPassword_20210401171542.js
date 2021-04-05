import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
import '../App.css';


const ForgetPassword = () => {
  return (
    <Fragment>
      <form className="loginForm" noValidate>

        {/* <img className="logoforget" src={Logo} alt="Diagnostica-Logo"></img> */}
        <div className="field-icon" >
          <i className=" material-icons fa-4x">lock</i>
        </div>
        <h3>Forget Your passsword </h3>


        <div>
          {/* <i className="mx-auto material-icons prefix">email</i> */}
          <div className="textInput">
            <input
              // className={this.props.formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              className="input"
              noValidate
            // onChange={this.handleChange}
            />
          </div>

        </div>

        <div className="row">
          <div className=" ">
            <Link to='/Login' className="btn">
              <i className="bi bi-arrow-left">keyboard_backspace</i>
            </Link>
          </div>
          <div className="">
            <input className="btn"
              type="submit"
              name=""
              value="Send my password"
              noValidate />
          </div>

        </div>


      </form>
    </Fragment>

  )
}
export default ForgetPassword