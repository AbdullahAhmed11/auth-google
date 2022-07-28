import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GoogleButton } from "react-google-button";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const { createUser, googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password, username);
      navigate("/account");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <Wrapper>
      <Title>Sign up for a free account</Title>
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
          <label>Username</label> <br />
          <input
            type="text"
            placeholder="Enter Your username"
            onChange={(e) => setUsername(e.target.value)}
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
          <button>Sign up</button>
        </div>
        <div>
          Already have account <a href="/signin">signin</a>
        </div>
      </Form>
      <GoogleButton onClick={handleGoogleSignIn} />
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
const Form = styled.form`
  background: #ddd;
  padding: 20px;
  width: 800px;
  align-items: center;
  text-align: center;
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
  @media (max-width: 860px) {
    width: 400px;
  }
`;
export default Signup;
