import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Forms/Input/Input";
import Message from "../../../components/UI/Message/Message";
import { StyledForm } from "../../../hoc/layouts/elements";

const AddTodo = ({ addNote, loading, error }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <Button color='main' contain onClick={() => setIsOpened(true)}>
        Add Note
      </Button>
      <Modal opened={isOpened} close={() => setIsOpened(false)}>
        <Heading noMargin size='h1' color='white'>
          Add Your New Note
        </Heading>
        <Heading bold size='h4' color='white' style={{ margin: 20 }}>
          Type your note and press add
        </Heading>
        <Formik
          initialValues={{
            note: "",
          }}
          validationSchema={NoteSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // send note here
            const res = await addNote(values);
            if (res) {
              setIsOpened(false);
            }
            resetForm();
          }}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Field
                type='text'
                name='note'
                placeholder='Write Something'
                component={Input}
              />

              <ButtonsWrapper>
                <Button
                  color='main'
                  type='submit'
                  contain
                  style={{ marginRight: "6rem" }}
                  disabled={!isValid || isSubmitting}
                  disabled={loading}
                  loading={loading ? "Adding" : null}
                >
                  Add Note
                </Button>
                <Button color='main' contain onClick={() => setIsOpened(false)}>
                  Cancel
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const NoteSchema = Yup.object().shape({
  note: Yup.string().required("Please type a note").min(4, "Too short"),
});

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const mapStateToProps = ({ notes }) => ({
  loading: notes.loading,
  error: notes.error,
});

const mapDispatchToProps = {
  addNote: actions.addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
