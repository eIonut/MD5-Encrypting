/* eslint-disable react/prop-types */
import md5 from "md5";
import md5_local from "../md5";

import styled from "styled-components";

const MessageText = styled.div`
  background-color: #fff;
  color: black;
  border-radius: 28px;
  width: 307px;
  height: 38px;
  box-shadow: 4px 5px 15.3px -1px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EncryptedMessage = ({ submittedText, local = true }) => {
  return (
    <MessageText>
      {local ? md5_local(submittedText) : md5(submittedText)}
    </MessageText>
  );
};

export default EncryptedMessage;
