import { useState } from "react";
import { styled } from "styled-components";

const ButtonVersionStyled = styled.button`
  background-color: ${(props) => props.$bgColor};
  color: #fff;
  width: 390px;
  height: 130px;
  font-size: 30px;
  border-radius: 10px;
  border: ${(props) =>
    props.$active ? "4px solid #00FFFF" : "4px solid transparent"};
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  transition: transform 0.2s ease-out;
`;

// eslint-disable-next-line react/prop-types
const ButtonVersion = ({ bgColor, children }) => {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <ButtonVersionStyled
      onClick={() => setButtonActive(!buttonActive)}
      $active={buttonActive}
      $bgColor={bgColor}
    >
      {children}
    </ButtonVersionStyled>
  );
};

export default ButtonVersion;
