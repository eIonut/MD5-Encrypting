import styled from "styled-components";
import { useLocation } from "react-router-dom";
import EncryptingStep from "./../components/EncryptingStep";

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 30px 0;
  overflow: hidden;
`;
const EncryptPage = () => {
  const location = useLocation();
  const { standardClicked, localClicked } = location.state || {
    standardClicked: false,
    localClicked: false,
  };

  return (
    <Wrapper>
      {standardClicked && (
        <>
          <EncryptingStep version={"Standard"} local={false} />
        </>
      )}
      {localClicked && (
        <>
          <EncryptingStep version={"Local"} local={true} />
        </>
      )}
    </Wrapper>
  );
};
export default EncryptPage;
