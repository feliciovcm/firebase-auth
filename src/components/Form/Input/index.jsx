import React from 'react';
import { Container, InputField, Title } from './styles';

export function Input(props) {
  const {
    type, name, handleChange, handleBlurr, value,
  } = props;

  return (
    <Container>
      <Title>
        {name}
      </Title>
      <InputField
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlurr}
        value={value}
      />
    </Container>
  );
}
