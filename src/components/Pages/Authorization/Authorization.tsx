import {FC} from 'react';
import InputForm from '@src/components/component/InputForm/InputForm';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {IAuthData} from '@src/types';
import PostButton from '@src/components/component/PostButton/PostButton';
import {v4 as uuidv4} from 'uuid';

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
  const onSubmit = (values: IAuthData, actions: FormikHelpers<IAuthData>) => {
    console.log('success');
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
          />
        </Form>
      )}
    </Formik>
  );
};

export default Authorization;
