import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { FormWrapper, StyledForm } from "../../../hoc/layouts/elements";
import styled from "styled-components";
import Message from "../../../components/UI/Message/Message";
import Heading from "../../../components/UI/Headings/Heading";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Modal from "../../../components/UI/Modal/Modal";
import * as Yup from "yup";
import * as actions from "../../../store/actions";

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Too short")
    .max(25, "Too long"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string().min(8, "The password is too short"),

  //   confirmPassword: Yup.string().when("password", {
  //     is: (password) => password.length > 0,
  //     then: Yup.string()
  //       .required("You need to confirm password")
  //       .oneOf([Yup.ref("password"), null], `Password doesn't match`),
  //   }),
});

const Profile = ({
  firebase,
  editProfile,
  loading,
  error,
  loadingDelete,
  errorDelete,
  deleteUser,
}) => {
  const [modalOpened, setModalOpened] = useState(false);
  if (!firebase.profile.isLoaded) return null;
  return (
    <>
      <Formik
        initialValues={{
          firstName: firebase.profile.firstName,
          lastName: firebase.profile.lastName,
          email: firebase.auth.email,
          password: "",
          confirmPassword: "",
        }}
        validationSchema={ProfileSchema}
        onSubmit={async (values, { setSubmitting }) => {
          editProfile(values);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading noMargin size='h1' color='white'>
              Edit your profile
            </Heading>
            <Heading bold size='h4' color='white' style={{ margin: 20 }}>
              You can edit your profile here
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
                  Editing...
                </Button>
              ) : (
                <Button disabled={!isValid} type='submit'>
                  Edit Profile
                </Button>
              )}

              <Message error show={error}>
                {error}
              </Message>
              <Message success show={error === false}>
                Profile Updated Successfully!
              </Message>
              <DeleteWrapper onClick={() => setModalOpened(true)}>
                Delete Account
              </DeleteWrapper>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
      <Modal opened={modalOpened} close={() => setModalOpened(false)}>
        <Heading noMargin size='h1' color='white'>
          Delete your acount
        </Heading>
        <Heading bold size='h4' color='white' style={{ margin: 20 }}>
          Do you really want to delete your account?
        </Heading>
        <ButtonsWrapper>
          <Button
            color='red'
            contain
            onClick={() => deleteUser()}
            style={{ marginRight: "6rem" }}
            disabled={loadingDelete}
            loading={loadingDelete ? "Deleting" : null}
          >
            Delete
          </Button>
          <Button color='main' contain onClick={() => setModalOpened(false)}>
            Cancel
          </Button>
        </ButtonsWrapper>
        <Message error show={errorDelete}>
          {errorDelete}
        </Message>
      </Modal>
    </>
  );
};

const DeleteWrapper = styled.div`
  cursor: pointer;
  color: #ff5757;
  font-size: 1.3rem;
  transition: all 0.2s;
  font-weight: 700;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
`;

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
  loadingDelete: auth.deleteUser.loading,
  errorDelete: auth.deleteUser.error,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  deleteUser: actions.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
