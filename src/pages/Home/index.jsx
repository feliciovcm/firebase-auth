import React from 'react';
import { signOut } from 'firebase/auth';
import {
  Box, Container, CustomButton, Title,
} from './styles';
import { auth } from '../../config/firebase';

export default function HomePage() {
  function logout() {
    return signOut(auth);
  }

  return (
    <Container>
      <Box>
        <Title>
          Obrigado a todos pela presença!
        </Title>
        <CustomButton type="button" onClick={logout}>
          CLICK TO LOGOUT
        </CustomButton>
      </Box>
    </Container>
  );
}
