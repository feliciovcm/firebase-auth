import React from 'react';
import {
  Container, InputField, Title, ErrorMessage,
} from './styles';

export function Input(props) {
  const {
    type, name, handleChange, handleBlurr, value, error, touched,
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
      {
        error && touched ? (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        ) : (null)
      }
    </Container>
  );
}
