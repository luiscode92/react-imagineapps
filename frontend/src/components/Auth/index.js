
import styled from "styled-components";
import { UserContext } from "../../context/AuthContext";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${props => props.active ? "2px solid blue" : "none"};
`;

const FormContainer = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default function IndexAuth() {
  const { loginHandler, currentUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();
  

  const handleLogin = (e) => {
    e.preventDefault();
    loginHandler(email, password);
  
  };
  useEffect(() => {
    if (currentUser) {
        history.push('/user');
    }
  }, [currentUser, history]);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle register
  };

  return (
    <FormContainer>
      <TabContainer>
        <Tab active={activeTab === 'login'} onClick={() => setActiveTab('login')}>Login</Tab>
        <Tab active={activeTab === 'register'} onClick={() => setActiveTab('register')}>Register</Tab>
      </TabContainer>

      {activeTab === 'login' ? (
        <Form onSubmit={handleLogin}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="submit" value="Login" />
        </Form>
      ) : (
        <Form onSubmit={handleRegister}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>
            <Input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} /> 
            Is Admin
          </label>
          <Input type="submit" value="Register" />
        </Form>
      )}
    </FormContainer>
  );
}
