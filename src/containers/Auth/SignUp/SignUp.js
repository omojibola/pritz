import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layouts/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";
import * as actions from "../../../store/actions";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Too short")
    .max(25, "Too long"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "The password is too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm password"),
});

const SignUp = ({ signUp, loading, error }) => {
  console.log(error);
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await signUp(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading noMargin size='h1' color='white'>
              Sign Up for an Account
            </Heading>
            <Heading bold size='h4' color='white' style={{ margin: 20 }}>
              Fill in your details to register
            </Heading>
            <StyledForm>
              <Field
                type='text'
                name='firstName'
                placeholder='Your first Name'
                component={Input}
              />
              <Field
                type='text'
                name='lastName'
                placeholder='Your last Name'
                component={Input}
              />
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
              <Field
                type='password'
                name='confirmPassword'
                placeholder='Re-type your password'
                component={Input}
              />
              {loading ? (
                <Button disabled={!isValid} type='submit'>
                  Signing in
                </Button>
              ) : (
                <Button disabled={!isValid} type='submit'>
                  Sign Up
                </Button>
              )}
              <Message error show={error}>
                {error}
              </Message>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
      <Link to='/login'>
        <span
          style={{
            color: "var(--color-main)",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Back to Sign In
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
  signUp: actions.signUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
