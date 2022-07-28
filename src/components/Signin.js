import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <Wrapper>
      <Title>Sign in for a free account</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Email Adress</label> <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Sign in</button>
        </div>
        <div>
          dont have account<a href="/signup">signup</a>
        </div>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  flex-direction: column;
  @media (max-width: 860px) {
    padding: 0 10px;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  @media (max-width: 860px) {
    font-size: 20px;
  }
`;
const Form = styled.form`
  background: #ddd;
  padding: 20px;
  width: 800px;
  align-items: center;
  text-align: center;
  @media (max-width: 860px) {
    width: 400px;
  }
  div {
    margin-top: 20px;
    label {
      font-size: 15px;
    }
    input {
      margin-top: 10px;
      height: 25px;
      border: none;
      border-radius: 10px;
      padding: 8px;
    }
  }
  button {
    color: #000;
    font-size: 15px;
    background: #fff;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`;
export default Signin;
