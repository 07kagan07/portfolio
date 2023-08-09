import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  height: 100vh;
  .aside {
    background-color:#040b14;
    top: 0;
    left: 0;
    width: 300px;
    z-index: 999;
    position: fixed;
    height: 100vh;
  }
  .content {
    flex: 1;
    overflow: auto;
    margin-left: 300px;
  }
`;
