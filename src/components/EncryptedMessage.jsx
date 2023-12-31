/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import md5 from "md5";
import md5_local from "../md5";
import styled from "styled-components";
import TrimText from "./TrimText";
import Tooltip from "./Tooltip";
import { FaEquals } from "react-icons/fa";
import CopyToClipboardButton from "./CopyToClipboardButton";

const MessageText = styled.div`
  background-color: #f777a2;
  color: #fff;
  border-radius: 8px;
  width: 280px;
  height: 38px;
  box-shadow: 4px 5px 15.3px -1px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const PreviousMessageText = styled.div`
  background-color: #3e6de8;
  color: #fff;
  border-radius: 8px;
  width: 316px;
  height: 38px;
  box-shadow: 4px 5px 15.3px -1px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const EncryptedMessage = ({ submittedText, local }) => {
  const versionToShow = local ? md5_local(submittedText) : md5(submittedText);
  return (
    <>
      <PreviousMessageText>
        <Tooltip text={submittedText}>
          <TrimText>{submittedText}</TrimText>
        </Tooltip>
      </PreviousMessageText>
      <FaEquals />
      <MessageContainer>
        <MessageText>
          <Tooltip text={versionToShow}>
            <TrimText>{versionToShow}</TrimText>
          </Tooltip>
        </MessageText>
        <CopyToClipboardButton textToCopy={versionToShow} />
      </MessageContainer>
    </>
  );
};

export default EncryptedMessage;
