import React from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import { FormWrapper, StyledForm } from "../../../hoc/layouts/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";

const MessageWrapper = styled.div``;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string().required("Password is required"),
});

const Login = ({ login, loading, error }) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await login(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading noMargin size='h1' color='white'>
              Login into your Account
            </Heading>
            <Heading bold size='h4' color='white' style={{ margin: 20 }}>
              Fill in your details to login to your account
            </Heading>
            <StyledForm>
              <Field
                type='email'
                name='email'
                placeholder='Your email address...'
                component={Input}
              />

              <Field
                type='password'
                name='password'
                placeholder='password'
                component={Input}
              />

              {!loading ? (
                <Button disabled={!isValid} type='submit'>
                  Login
                </Button>
              ) : (
                <Button disabled={!isValid} type='submit'>
                  Logging In
                </Button>
              )}
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
            <Link to='/recover'>
              <Heading bold size='h4' color='white' style={{ margin: 20 }}>
                Forgot password?
              </Heading>
            </Link>
          </FormWrapper>
        )}
      </Formik>

      <span style={{ fontSize: "14px" }}>Don't have an account?</span>
      <Link to='/signUp'>
        <span
          style={{
            color: "var(--color-main)",
            fontWeight: "bold",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        >
          Sign Up
        </span>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
