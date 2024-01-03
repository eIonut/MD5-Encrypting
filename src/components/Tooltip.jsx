/* eslint-disable react/prop-types */
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: ${(props) =>
    props.$text.length > 30 ? "1px dotted black" : "none"};
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 200px;
  max-width: 200px;
  max-height: 100px;
  word-wrap: break-word;
  background-color: black;
  color: #fff;
  text-align: start;
  padding-left: 6px;
  border-radius: 6px;
  position: absolute;
  right: 25px;
  top: -40px;
  z-index: 1;
  ${TooltipContainer}:hover & {
    visibility: visible;
  }
`;

const Tooltip = ({ children, text }) => {
  const showTooltip = text.length > 30;

  return (
    <TooltipContainer $text={text}>
      {children}
      {showTooltip && (
        <TooltipText>
          {text.length > 60 ? text.slice(0, 60) + "..." : text}
        </TooltipText>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
