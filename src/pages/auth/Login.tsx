import React from 'react';
import {Container} from '@mui/material';
import {LoginForm} from './components/LoginForm';
import {AuthHeader} from './components/AuthHeader';

export const Login = () => {
  return (
    <>
      <AuthHeader />

      <Container fixed maxWidth="xs">
        <LoginForm />
      </Container>
    </>
  );
};
