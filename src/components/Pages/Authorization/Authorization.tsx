import {FC} from 'react';
import InputForm from '@src/components/component/InputForm/InputForm';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {IAuthData} from '@src/types';
import PostButton from '@src/components/component/PostButton/PostButton';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import {Box} from '@mui/material';
import axios from '@src/components/api/index';

const Ayth = styled(Box)`
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
`;

const Authorization: FC = () => {
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
  const onSubmit = async (
    values: IAuthData,
    actions: FormikHelpers<IAuthData>,
  ) => {
    try {
      await axios.post(
        '/register',
        {
          email: values.email,
          password: values.password,
          id: uuidv4(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log(String(error));
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
          <Ayth>
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
            <PostButton
              disabled={
                !dirty ||
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
              onSubmit={handleSubmit}
              label='login'
            />
          </Ayth>
        </Form>
      )}
    </Formik>
  );
};

export default Authorization;
