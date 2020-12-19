import styled, { keyframes } from "styled-components";

const hideHeader = (props) => {
  return keyframes`
    to{ top: -60px}
    `;
};

const StyledHeader = styled.header`
  background-color: #141414;
  width: 100%;
  height: ${(props) => props.headerHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 100;
  animation: ${(props) => (props.showHeader ? "" : hideHeader)} 0.3s forwards;
`;
export default StyledHeader;
