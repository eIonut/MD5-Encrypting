import styled from "styled-components";
import ButtonVersion from "./components/ButtonVersion";
import EncryptingStep from "./components/EncryptingStep";

const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StartTestingButton = styled.button`
  width: 100%;
  height: 72px;
  border: 2px solid #969696;
  border-radius: 10px;
  background: #fff;
  font-size: 24px;
  color: #969696;
  &:hover {
    cursor: pointer;
    background: #3e6de8;
    color: #fff;
    border-color: transparent;
  }
  transition: all 0.3s;
`;

const VersionsButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Heading = styled.h1`
  font-size: 40px;
  padding-bottom: 100px;
`;

const Wrapper = styled.main`
  width: 100%;
  min-height: 80vh;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <EncryptingStep></EncryptingStep>
    </>
    // <Wrapper>
    //   <Heading>Select MD5 version</Heading>
    //   <ButtonsContainer>
    //     <VersionsButtonsContainer>
    //       <ButtonVersion bgColor="#3E6DE8">Standard</ButtonVersion>
    //       <ButtonVersion bgColor="#EDB0C6">Local</ButtonVersion>
    //     </VersionsButtonsContainer>

    //     <StartTestingButton>Start testing</StartTestingButton>
    //   </ButtonsContainer>
    // </Wrapper>
  );
}

export default App;
