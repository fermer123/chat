import {FC, useCallback, useState} from 'react';
import InputForm from '@src/components/component/InputForm/InputForm';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {IAuthData} from '@src/types';
import PostButton from '@src/components/component/PostButton/PostButton';
import styled from 'styled-components';
import {Box, Chip} from '@mui/material';
import SwitchAuth from '@src/components/component/SwitchAuth/SwitchAuth';
import {useNavigate} from 'react-router-dom';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
import userLogin from '@src/components/api/userLogin';
import userRegister from '@src/components/api/userRegister';

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
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
  transition: 0.5 ease;
`;

const Authorization: FC = () => {
  const [, setUser] = useLocalStorage<string>('user', '');

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

  const onSubmit = (values: IAuthData, actions: FormikHelpers<IAuthData>) => {
    if (switchAuth) {
      userRegister({
        email: values.email,
        password: values.password,
        setError: setErrorRegister,
        push,
        setUser,
      });
    } else {
      userLogin({
        email: values.email,
        password: values.password,
        setError: setErrorLogin,
        push,
        setUser,
      });
    }
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
                label={switchAuth ? 'sign up' : 'log in'}
              />
              <SwitchAuth
                switchAuth={switchAuth}
                switchAuthForm={switchAuthForm}
              />
            </SwithAuthForm>
            {!!errorLogin && !switchAuth && (
              <ErrorAlert label={errorLogin} color='error' />
            )}
            {!!errorRegister && switchAuth && (
              <ErrorAlert label={errorRegister} color='error' />
            )}
          </Auth>
        </Form>
      )}
    </Formik>
  );
};

export default Authorization;
