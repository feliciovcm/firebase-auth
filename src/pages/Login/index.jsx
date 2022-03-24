import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
  Container, LoginBox, Title, SubmitButton,
} from './styles';
import { Input } from '../../components/Form/Input';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginPage() {
  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('É necessario preencher um email válido'),
    password: Yup.string()
      .required('É necessário preencher o campo de senha')
      .min(6, 'Senha muito curta, deve ser no mínimo 6 caracteres'),
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  async function onSubmit(values) {
    try {
      await login(values.email, values.password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <LoginBox>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
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
                <Title>Login</Title>
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

                <SubmitButton type="submit">
                  Login
                </SubmitButton>
              </form>
            )
          }
        </Formik>

      </LoginBox>
    </Container>
  );
}
