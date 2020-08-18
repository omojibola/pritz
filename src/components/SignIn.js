import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase/Firebase.utils";
import "./SignIn.styles.scss";
import FormInput from "./FormInput";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h1 className='text-center'>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={email}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            onChange={this.handleChange}
            value={password}
            label='password'
            required
          />
          <button className='sign-in-button'>Sign In</button>
          <span className='text'>Don't have an Account?</span>
          <Link to='/sign-up'>
            <span className='sign-up'>Sign Up</span>
          </Link>

          <p className='text-center' style={{ color: "#454547" }}>
            OR
          </p>

          <button className='google' onClick={signInWithGoogle}>
            Sign In with Google
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
