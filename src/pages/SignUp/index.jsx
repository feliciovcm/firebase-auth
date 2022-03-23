import React from 'react';
import { Formik } from 'formik';
import {
  Container, SignUpBox, Title, SubmitButton,
} from './styles';
import { Input } from '../../components/Form/Input';

export default function SignUpPage() {
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Container>
      <SignUpBox>
        <Formik
          initialValues={{ email: '', password: '', confirmationPassword: '' }}
          onSubmit={onSubmit}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Title>Hello world</Title>
                <Input
                  type="email"
                  name="email"
                  handleChange={handleChange}
                  handleBlurr={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />

                <Input
                  name="password"
                  type="password"
                  handleChange={handleChange}
                  handleBlurr={handleBlur}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                />

                <Input
                  type="password"
                  name="confirmationPassword"
                  handleChange={handleChange}
                  handleBlurr={handleBlur}
                  value={values.confirmationPassword}
                  error={errors.confirmationPassword}
                  touched={touched.confirmationPassword}
                />
                <SubmitButton type="submit">
                  Register
                </SubmitButton>
              </form>
            )
          }
        </Formik>

      </SignUpBox>
    </Container>
  );
}
