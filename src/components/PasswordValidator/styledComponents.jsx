import styled from 'styled-components';

// Wrapper for the Password Validator Component
export const ValidatorWrapper = styled.div`
  background-color: #24263c;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

// Password Validator Heading
export const Heading = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;

// Input Field for Password
export const PasswordInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #383a4e;
  background-color: #edeeff;
  width: 250px;
  font-size: 16px;
  color: #475569;
`;

// Error message if password length is invalid
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  visibility: ${(props) => (props.showError ? 'visible' : 'hidden')};
`;

// Success message when password is valid
export const SuccessMessage = styled.p`
  color: #10b981;
  font-size: 14px;
  visibility: ${(props) => (props.showSuccess ? 'visible' : 'hidden')};
`;

// Button to trigger validation
export const ValidateButton = styled.button`
  padding: 10px 20px;
  background-color: #475569;
  color: #f8fafc;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #383a4e;
  }
`;
