/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { getValidationSchema } from "../utils/helpers";
import EncryptedMessage from "./EncryptedMessage";
import { useState } from "react";
import EncryptingForm from "./EncryptingForm";
import { FaLongArrowAltDown } from "react-icons/fa";
import styled from "styled-components";

const ArrowIcon = styled(FaLongArrowAltDown)`
  color: #3e6de8;
  font-size: 2em;
`;

const EncryptingStepContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const VersionHeading = styled.h2`
  width: 100%;
  text-align: start;
  margin: 0;
`;

const EncryptingStep = ({ local, version }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedText, setSubmittedText] = useState("");
  return (
    <EncryptingStepContainer>
      <VersionHeading>Using {version} MD5</VersionHeading>
      <Formik
        initialValues={{ text: "" }}
        validationSchema={getValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmitted(true);
          setSubmittedText(values.text);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
          <EncryptingForm
            {...{
              handleSubmit,
              handleChange,
              handleBlur,
              isValid,
            }}
            text={values.text}
          />
        )}
      </Formik>

      {submitted && (
        <>
          <ArrowIcon />

          <EncryptedMessage {...{ local, submittedText }} />
        </>
      )}
    </EncryptingStepContainer>
  );
};

export default EncryptingStep;
