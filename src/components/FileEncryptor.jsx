import React, { useState } from "react";
import mammoth from "mammoth";
import styled from "styled-components";
import EncryptedMessage from "./EncryptedMessage";
import { FaLongArrowAltDown } from "react-icons/fa";

// Styled Components
const FileInput = styled.input`
  display: none;
`;

const ArrowIcon = styled(FaLongArrowAltDown)`
  color: #3e6de8;
  font-size: 2em;
`;

const Label = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #3e6de8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FileContainer = styled.div`
  border-radius: 28px;
  height: 170px;
  overflow: hidden;
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

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  align-self: center;
`;

const SubmittedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FileEncryptor = ({ version, local, id }) => {
  const uniqueId = `file-input-${id}`;
  const [submittedText, setSubmittedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [labelText, setLabelText] = useState("Choose a file");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      let textContent = "";

      if (fileType === "text/plain" || fileType.match(/wordprocessingml/)) {
        if (file.name.length > 40) {
          const fileSegments = file.name.split(".");

          setLabelText(
            `${file.name.slice(0, 40)}.${
              file.name.split(".")[fileSegments.length - 1]
            }`
          );
        } else {
          setLabelText(file.name);
        }
        if (fileType === "text/plain") {
          textContent = await readFileAsText(file);
        } else {
          textContent = await readWordFile(file);
        }
        setSubmittedText(textContent);
        setSubmitted(true);
      } else {
        setLabelText(
          "This type of file is not supported. Try with docx and txt files."
        );
        setSubmitted(false);
      }
    } else {
      setLabelText("Choose a file");
      setSubmitted(false);
    }
  };

  return (
    <Container>
      <Title>Using {version} MD5 with a Custom File</Title>
      <FileContainer>
        <Label htmlFor={uniqueId}>
          <p>{labelText}</p>
        </Label>
        <FileInput
          id={uniqueId}
          type="file"
          onChange={handleFileChange}
          accept=".txt,.docx"
        />
      </FileContainer>
      {submitted && (
        <SubmittedContainer>
          <ArrowIcon />
          <EncryptedMessage {...{ local, submittedText }} />
        </SubmittedContainer>
      )}
    </Container>
  );
};

async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target.result);
    reader.onerror = (event) => reject(event.target.error);
    reader.readAsText(file);
  });
}

async function readWordFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const arrayBuffer = event.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        resolve(result.value);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

export default FileEncryptor;
