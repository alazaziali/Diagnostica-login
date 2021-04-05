import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logos/DiagnosticaSampleLogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';


const ForgetPassword = () => {
  return (
    <Fragment>
      <form className="loginForm" noValidate>

        {/* <img className="logoforget" src={Logo} alt="Diagnostica-Logo"></img> */}
        <div className="field-icon" >
          <i class="fas fa-lock fa-4x"></i>
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
              <i class="fas fa-long-arrow-alt-left fa-lg"></i>
            </Link>
          </div>
          <div className="">
            <input className="btn"
              type="submit"
              name=""
              value="Confirm email"
              noValidate />
          </div>

        </div>


      </form>
    </Fragment>

  )
}
export default ForgetPassword