import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login'
import Registration from './Components/Registration'
import ForgetPassword from './Components/ForgetPassword';
import Navbar from './Components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="loginForm">
      //     <Switch>

      //       <Route exact path='/' render=
      //         {props => (
      //           <Fragment>
      //             < Registration />
      //           </Fragment>
      //         )
      //         } />
      //       <Route exact path="/ForgetPassword" render={props => (
      //         <Fragment>
      //           < ForgetPassword />
      //         </Fragment>
      //       )
      //       } />
      //       <Route exact path='/Login' render=
      //         {props => (
      //           <Fragment>
      //             < Login />
      //           </Fragment>
      //         )
      //         } />
      //     </Switch>
      //     {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}
      //   </div>
      // </Router>
      <Navbar />


    );
  }
}

export default App;