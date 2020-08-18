import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.styles.scss";
import FormInput from "./FormInput";

const validEmailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { errors, password, confirmPassword } = this.state;
    switch (name) {
      case "displayName":
        errors.displayName =
          value.length < 5
            ? "Username must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          password !== confirmPassword ? "Passwords do not match" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const {
      email,
      password,
      displayName,
      confirmPassword,
      errors,
    } = this.state;
    return (
      <div className='sign-in'>
        <h1 className='text-center'>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Username'
            noValidate
          />
          {errors.displayName !== "" && (
            <span className='error'>{errors.displayName}</span>
          )}
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={email}
            label='email'
            noValidate
          />
          {errors.email !== "" && <span className='error'>{errors.email}</span>}

          <FormInput
            name='password'
            type='password'
            onChange={this.handleChange}
            value={password}
            label='password'
            noValidate
          />
          {errors.password !== "" && (
            <span className='error'>{errors.password}</span>
          )}

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            noValidate
          />

          <button className='sign-in-button'>Sign Up</button>
          <Link to='/'>
            <span className='sign-up'>Back to Sign In</span>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
