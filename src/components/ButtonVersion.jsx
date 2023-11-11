import { useState } from "react";
import { styled } from "styled-components";

const ButtonVersionStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.$bgColor};
  color: #fff;
  width: 390px;
  height: 130px;
  font-size: 30px;
  border-radius: 10px;
  border: ${(props) =>
    props.$active ? "4px solid #f777a2" : "4px solid transparent"};
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  transition: transform 0.2s ease-out;
`;

// eslint-disable-next-line react/prop-types
const ButtonVersion = ({ bgColor, children, onClick, buttonType }) => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleClick = () => {
    const newActiveState = !buttonActive;
    setButtonActive(newActiveState);

    if (onClick) {
      onClick(buttonType, newActiveState);
    }
  };

  return (
    <ButtonVersionStyled
      onClick={handleClick}
      $active={buttonActive}
      $bgColor={bgColor}
    >
      {children}
    </ButtonVersionStyled>
  );
};

export default ButtonVersion;
