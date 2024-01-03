import styled from "styled-components";
import { useLocation } from "react-router-dom";
import EncryptingStep from "./../components/EncryptingStep";
import FileEncryptor from "../components/FileEncryptor";

const Wrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 30px);
  text-align: center;
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  overflow: hidden;
  padding: 15px 0;

  ${(props) =>
    props.$bothClicked &&
    `
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, auto);
`};

  ${(props) =>
    props.$bothClicked &&
    `
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}

  @media (max-width: 900px) {
    flex-direction: column;
`;

const EncryptPage = () => {
  const location = useLocation();
  const { standardClicked, localClicked } = location.state || {
    standardClicked: false,
    localClicked: false,
  };

  const areBothVersionsSelected = standardClicked && localClicked;

  return (
    <Wrapper $bothClicked={areBothVersionsSelected}>
      {standardClicked && (
        <>
          <EncryptingStep version={"Standard"} local={false} />
          <FileEncryptor id="1" version={"Standard"} local={false} />
        </>
      )}
      {localClicked && (
        <>
          <EncryptingStep version={"Local"} local={true} />
          <FileEncryptor id="2" version={"Local"} local={true} />
        </>
      )}
    </Wrapper>
  );
};

export default EncryptPage;
