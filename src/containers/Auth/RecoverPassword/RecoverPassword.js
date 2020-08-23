import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { FormWrapper, StyledForm } from "../../../hoc/layouts/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Message from "../../../components/UI/Message/Message";
import * as actions from "../../../store/actions";

const RecoverSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("The email is required"),
});

const RecoverPassword = ({ error, loading, recoverPassword }) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await recoverPassword(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size='h1' color='white'>
            Recover Password
          </Heading>
          <Heading size='h4' color='white'>
            Type in your email to recover your password
          </Heading>
          <StyledForm>
            <Field
              type='email'
              name='email'
              placeholder='Type your email...'
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "sending" : null}
              type='submit'
            >
              Recover Email{" "}
            </Button>
          </StyledForm>
          <Message error show={error}>
            {error}
          </Message>
          <Message success show={error === false}>
            Recovery Sent Successfully
          </Message>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
  recoverPassword: actions.recoverPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
