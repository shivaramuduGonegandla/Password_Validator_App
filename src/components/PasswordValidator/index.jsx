import React, { useState } from 'react';
import { ValidatorWrapper, Heading, PasswordInput, ErrorMessage, SuccessMessage, ValidateButton } from './styledComponents';


const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle password input change
  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to validate password and check strength
  const validatePassword = () => {
    const errors = [];
    
    // Length check: Password must be at least 8 characters
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    // Uppercase letter check
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }

    // Number check
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number.");
    }

    // Special character check
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character.");
    }

    // If no errors, show success
    if (errors.length === 0) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }

    // Set error messages
    setErrorMessages(errors);
  };

  return (
    <ValidatorWrapper>
      <Heading>Password Validator</Heading>
      <PasswordInput
        type="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      {/* Display Error messages */}
      {errorMessages.length > 0 ? (
        errorMessages.map((error, index) => (
          <ErrorMessage key={index} showError={true}>{error}</ErrorMessage>
        ))
      ) : (
        <SuccessMessage showSuccess={showSuccess}>Your password is secure!</SuccessMessage>
      )}
      <ValidateButton onClick={validatePassword}>Validate</ValidateButton>
    </ValidatorWrapper>
  );
};

export default PasswordValidator;
