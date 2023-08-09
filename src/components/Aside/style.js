import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  height: 100%;
  .img-shadow {
    box-shadow: 0px 0px 20px #ff9;
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100px;
    }
  }
  h4 {
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
  }
  .menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    gap: 20px;
    li {
      a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 18px;
        gap: 10px;
        &:hover {
            color: #149ddd;
        }
      }
    }
  }
  footer {
    margin-top: auto;
  }
`;
