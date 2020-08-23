import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { FormWrapper } from "../../../hoc/layouts/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Button from "../../../components/UI/Forms/Button/Button";
import Message from "../../../components/UI/Message/Message";

import * as actions from "../../../store/actions/";

const VerifyEmail = ({ sendVerification, error, loading }) => {
  return (
    <div>
      <FormWrapper>
        <Heading color='white' size='h1'>
          You are not verified
        </Heading>
        <Heading color='white' bold size='h4'>
          Go to your email inbox, and please verify your email.
        </Heading>
        <Button
          loading={loading ? "sending email" : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Re-send Verification Email
        </Button>
      </FormWrapper>
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
      <Message error show={error}>
        {error}
      </Message>
      <Message success show={error === false}>
        Message Sent Successfully
      </Message>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
