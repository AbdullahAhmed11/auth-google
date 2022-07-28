import React from "react";
import styled from "styled-components";
function Navbar() {
  return (
    <Wrapper>
      <Title>user & authntication</Title>
      <Content>
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 30px;
  background: #ddd;
  overflow: hidden;
  @media (max-width: 860px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 860px) {
    font-size: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-right: 30px;
    text-decoration: none;
    color: #000;
    font-size: 15px;
    background: #fff;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #000;
    }
    @media (max-width: 860px) {
      font-size: 10px;
      padding: 10px;
      border-radius: 10px;
    }
  }
`;
export default Navbar;
