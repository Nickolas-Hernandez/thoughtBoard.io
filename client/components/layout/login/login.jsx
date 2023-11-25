import React, { useState } from 'react';
import { Container, Button, Box, Typography, Link } from '@mui/material';
import { BackgroundImage, StyledPaper, StyledInputField } from './loginStyles';

const Login = ({ onLogin }) => {
  const [ isSignUp, setIsSignUp ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState({});

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const user = {
        email: email,
        password: password
      };

      try {
        const response = await fetch(isSignUp ? '/api/signup' : '/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Success:', data);
          onLogin(data.token);
        } else {
          console.log('Error:', data);
          setErrors({ api: data.message });
        }
      } catch (error) {
        console.error('Network error:', error);
        setErrors({ api: 'Network error, please try again later.' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ display: 'flex', height: '100vh' }}>
      <StyledPaper elevation={6}>
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'black'
          }}
        >
          <Typography component="h1" variant='h1' sx={{ marginBottom: '2rem' }}>
            thoughtBoard.io
          </Typography>
          <Typography component="h3" variant='body1'>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, color: 'black' }}>
            <StyledInputField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your email"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email || ''}
              autoFocus
              sx={{
                '.MuiInputBase-input': {
                  color: 'black'
                }
              }}
            />
            <StyledInputField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password || ''}
              sx={{
                '.MuiInputBase-input': {
                  color: 'black'
                }
              }}
            />
            <Button type="submit" variant="standard" sx={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '18px',
              width: '100%',
              transition: 'background-color .3s ease',
              marginTop: '1rem',
              ':hover': {
                backgroundColor: '#3F3F46'
              }
            }}>
              {isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
            <span style={{ display: 'block', textAlign: 'center', paddingTop: '.4rem' }}>
              <Link href="#" variant="body2" onClick={handleToggle} sx={{ display: 'inline', margin: '0 auto' }}>
                {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
              </Link>
            </span>
          </Box>
        </Box>
      </StyledPaper>
      <BackgroundImage />
    </Container>
  );
};

export default Login;
