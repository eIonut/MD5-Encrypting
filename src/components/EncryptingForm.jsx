/* eslint-disable react/prop-types */
import { ErrorMessage } from "formik";
import styled from "styled-components";

const Form = styled.form`
  border-radius: 28px;
  width: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-shadow: 0px 1px 14px 0px rgba(0, 0, 0, 0.35);
  padding: 34px 57px;
  box-sizing: border-box;
`;

const EncryptButton = styled.button`
  border-radius: 8px;
  background: #3e6de8;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  border: none;
  height: 42px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background: #0035bd;
  }
  font-size: 16px;
  transition: background 0.2s ease-out;
  &:disabled {
    background: #98b1f1;
    cursor: auto;
  }
`;

const TextInput = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 42px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 16px;

  &:focus {
    outline-color: #3e6de8;
  }
`;

const TextErrorMessage = styled.p`
  color: red;
  justify-self: flex-start;
  width: 100%;
  margin: 0;
`;

const EncryptingForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  text,
  isValid,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={text}
          placeholder="Enter the text to be encrypted..."
        />
        <ErrorMessage
          render={(msg) => <TextErrorMessage>{msg}</TextErrorMessage>}
          name="text"
        />
        <EncryptButton type="submit" disabled={!isValid}>
          Encrypt
        </EncryptButton>
      </Form>
    </>
  );
};

export default EncryptingForm;
