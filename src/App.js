import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/layouts/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/Logout/Logout";
import SignUp from "./containers/Auth/SignUp/SignUp";
import VerifyEmail from "./containers/Auth/verifyEmail/VerifyEmail";
import RecoverPassword from "./containers/Auth/RecoverPassword/RecoverPassword";
import Profile from "./containers/Auth/profile/Profile";

const App = ({ loggedIn, emailVerified }) => {
  console.log(loggedIn);
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path='/verify-email' component={VerifyEmail} />
        <Route exact path='/logout' component={Logout} />
        <Redirect to='/verify-email' />
      </Switch>
    );
  } else if (loggedIn) {
    routes = (
      <>
        <Switch>
          <Route exact path='/' component={Todos} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/logout' component={Logout} />

          <Redirect to='/' />
        </Switch>
      </>
    );
  } else {
    routes = (
      <>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/recover' component={RecoverPassword} />
          <Redirect to='/login' />
        </Switch>
      </>
    );
  }
  return (
    <div className='App'>
      <Layout>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
