import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
function Account() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Wrapper>
      <Title>Welcome, {user && user.email} this your account</Title>
      <button onClick={handleLogout}>logout</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 860px) {
    font-size: 20px;
  }
`;

export default Account;
