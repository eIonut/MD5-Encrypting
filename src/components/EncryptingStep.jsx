import { Formik } from "formik";
import { getValidationSchema } from "../utils/helpers";
import EncryptedMessage from "./EncryptedMessage";
import { useState } from "react";
import EncryptingForm from "./EncryptingForm";
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";

const ArrowIcon = styled(FaLongArrowAltRight)`
  color: #3e6de8;
  font-size: 2em;
`;
const EncryptingStep = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedText, setSubmittedText] = useState("");
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{ text: "" }}
        validationSchema={getValidationSchema}
        onSubmit={(values) => {
          setSubmitted(true);
          setSubmittedText(values.text);
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
      <ArrowIcon />

      {submitted && (
        <EncryptedMessage local={false} submittedText={submittedText} />
      )}
    </div>
  );
};

export default EncryptingStep;
