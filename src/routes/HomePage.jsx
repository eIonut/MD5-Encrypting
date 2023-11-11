import styled from "styled-components";
import ButtonVersion from "../components/ButtonVersion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
`;

const StartTestingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  border-radius: 10px;
  font-size: 24px;
  background: #3e6de8;
  color: #fff;
  border-color: transparent;

  &:hover:not(:disabled) {
    cursor: pointer;
    background: #0035bd;
  }

  transition: background 0.2s ease-out;

  &:disabled {
    cursor: not-allowed;
    color: #ebebeb;
    background: #fff;
    border: 2px solid #ebebeb;
  }

  transition: transform 0.2s ease-out;
`;

const VersionsButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Heading = styled.h1`
  font-size: 40px;
`;

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StartTestingIcon = styled(BsFillPlayFill)`
  font-size: 30px;
  margin-right: 5px;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState({ standard: false, local: false });

  const handleClick = (buttonType, isActive = false) => {
    setClicked((prev) => ({ ...prev, [buttonType]: isActive }));

    if (buttonType === "startTesting") {
      navigate("/encrypt", {
        state: {
          standardClicked: clicked.standard,
          localClicked: clicked.local,
        },
      });
    }
  };

  return (
    <Wrapper>
      <Heading>Select MD5 version</Heading>
      <ButtonsContainer>
        <VersionsButtonsContainer>
          <ButtonVersion
            bgColor="#3E6DE8"
            onClick={(type, active) => handleClick(type, active)}
            buttonType="standard"
          >
            <AiFillLock />
            Standard
          </ButtonVersion>
          <ButtonVersion
            bgColor="#EDB0C6"
            onClick={(type, active) => handleClick(type, active)}
            buttonType="local"
          >
            <AiFillUnlock />
            Local
          </ButtonVersion>
        </VersionsButtonsContainer>

        <StartTestingButton
          disabled={!clicked.standard && !clicked.local}
          onClick={() => handleClick("startTesting")}
        >
          <StartTestingIcon /> Start testing
        </StartTestingButton>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default HomePage;
