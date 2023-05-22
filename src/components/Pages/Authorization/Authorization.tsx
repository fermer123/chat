import {FC, useCallback, useState} from 'react';
import InputForm from '@src/components/component/InputForm/InputForm';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {IAuthData} from '@src/types';
import PostButton from '@src/components/component/PostButton/PostButton';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {Box, Chip} from '@mui/material';
import axios from '@src/components/api/index';
import SwitchAuth from '@src/components/component/SwitchAuth/SwitchAuth';
import {useNavigate} from 'react-router-dom';

const Auth = styled(Box)`
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 1rem;
  padding: 0 10px;
`;
const SwithAuthForm = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ErrorAlert = styled(Chip)`
  display: flex;
  justify-content: center;
`;

const Authorization: FC = () => {
  const push = useNavigate();
  const [switchAuth, setSwitchAuth] = useState(false);
  const [errorLogin, setErrorLogin] = useState<string>('');
  const [errorRegister, setErrorRegister] = useState<string>('');

  const switchAuthForm = useCallback(() => {
    setSwitchAuth(!switchAuth);
  }, [switchAuth]);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, 'Слишком короткий пароль')
      .max(20, 'Слишком длинный пароль')
      .required('Поле не должо быть пустым'),
    email: Yup.string()
      .email('Неверный email')
      .required('Поле не должо быть пустым'),
  });
  const initialValues: IAuthData = {
    email: '',
    password: '',
  };

  const userRegister = async (email: string, password: string) => {
    try {
      await axios.post(
        '/register',
        {
          email,
          password,
          id: uuidv4(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      localStorage.setItem('user', email);
      setErrorRegister('');
      push('/');
    } catch (error) {
      if (error instanceof Error) {
        setErrorRegister(error.message);
      }
      setErrorRegister(String(error));
    }
  };

  const userLogin = async (email: string, password: string) => {
    try {
      await axios.post(
        '/login',
        {
          email,
          password,
          id: uuidv4(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      localStorage.setItem('user', email);
      setErrorLogin('');
      push('/chat');
    } catch (error) {
      if (error instanceof Error) {
        setErrorLogin(error.message);
      }
      setErrorLogin(String(error));
    }
  };

  const onSubmit = (values: IAuthData, actions: FormikHelpers<IAuthData>) => {
    if (switchAuth) {
      userRegister(values.email, values.password);
    }
    userLogin(values.email, values.password);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({errors, touched, isSubmitting, dirty, handleSubmit}) => (
        <Form>
          <Auth>
            <Field
              error={errors.email}
              touched={touched.email}
              label='Введите email'
              name='email'
              component={InputForm}
            />
            <Field
              error={errors.password}
              touched={touched.password}
              label='Введите пароль'
              name='password'
              component={InputForm}
            />
            <SwithAuthForm>
              <PostButton
                disabled={
                  !dirty ||
                  isSubmitting ||
                  !!(errors.email && touched.email) ||
                  !!(errors.password && touched.password)
                }
                onSubmit={handleSubmit}
                label={switchAuth ? 'register' : 'login'}
              />
              <SwitchAuth
                switchAuth={switchAuth}
                switchAuthForm={switchAuthForm}
              />
            </SwithAuthForm>
            <span>
              {!!errorLogin && <ErrorAlert label={errorLogin} color='error' />}
            </span>
            <span>
              {!!errorRegister && (
                <ErrorAlert label={errorRegister} color='error' />
              )}
            </span>
          </Auth>
        </Form>
      )}
    </Formik>
  );
};

export default Authorization;
