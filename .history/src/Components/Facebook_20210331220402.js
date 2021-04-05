import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  }
  responseFacebook = response => {
    // console.log(response);
    this.state({

      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;


    if (this.state.isLoggedIn) {
      fbContent = null;
    }
    else {
      fbContent = (
        <FacebookLogin
          appId="882520375626398"
          autoLoad={true}
          fields="name,email,picture"
          cssClass="btnFacebook"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon={<i className="fa fa-facebook"
            style{{ marginLeft: '5px' }}>
          </i>}
          textButton="&nbsp;&nbsp;Sign In with Facebook" />
      );

    }

    return (
      <div >
        {fbContent}
      </div>
    )
  }
}
