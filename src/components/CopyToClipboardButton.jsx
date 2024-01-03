import React, { useState } from "react";
import { MdCopyAll } from "react-icons/md";
import styled from "styled-components";
import { MdDone } from "react-icons/md";

const CopyIcon = styled(MdCopyAll)`
  font-size: 26px;
  opacity: 0.4;
  &:hover {
    cursor: pointer;
  }
`;

const DoneIcon = styled(MdDone)`
  font-size: 26px;
  opacity: 0.4;
`;

const CopyContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const CopyToClipboardButton = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1500);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <CopyContainer>
      {copySuccess ? <DoneIcon /> : <CopyIcon onClick={copyToClipboard} />}
    </CopyContainer>
  );
};

export default CopyToClipboardButton;
