// Function to validate the username
function validateUsername() {
    const usernameInput = document.getElementById('Username');
    const usernameValue = usernameInput.value.trim();
    const nameError = document.getElementById('name-error');
  
    if (usernameValue === '') {
      nameError.textContent = 'Username cannot be blank.';
      usernameInput.classList.add('error');
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 25) {
      nameError.textContent = 'Username must be between 3 and 25 characters.';
      usernameInput.classList.add('error');
      return false;
    } else {
      nameError.textContent = '';
      usernameInput.classList.remove('error');
      usernameInput.classList.add('success');
      return true;
    }
  }
  
  // Function to validate the email
  function validateEmail() {
    const emailInput = document.getElementById('Email');
    const emailValue = emailInput.value.trim();
    const emailError = document.getElementById('email-error');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Invalid email address.';
      emailInput.classList.add('error');
      return false;
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('error');
      emailInput.classList.add('success');
      return true;
    }
  }
  
  // Function to validate the password
  function validatePassword() {
    const passwordInput = document.getElementById('Password');
    const passwordValue = passwordInput.value.trim();
    const passwordError = document.getElementById('password-error');
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*).';
      passwordInput.classList.add('error');
      return false;
    } else {
      passwordError.textContent = '';
      passwordInput.classList.remove('error');
      passwordInput.classList.add('success');
      return true;
    }
  }
  
  // Function to validate the confirm password
  function validateConfirmPassword() {
    const passwordInput = document.getElementById('Password');
    const confirmPasswordInput = document.getElementById('Confirm-Password');
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    if (confirmPasswordValue !== passwordInput.value) {
        confirmPasswordError.textContent = 'Confirm password must match the password.';
      confirmPasswordInput.classList.add('error');
      return false;
    } else {
        confirmPasswordError.textContent = '';
      confirmPasswordInput.classList.remove('error');
      confirmPasswordInput.classList.add('success');
      return true;
    }
  }
  
  // Function to handle form submission
  document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
  
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
  
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      // Submit the form
      console.log('Form submitted successfully!');
    }
  });