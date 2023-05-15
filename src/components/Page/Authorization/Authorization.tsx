import {FC} from 'react';
import InputForm from '@src/components/component/InputForm/InputForm';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import style from './Authorization.module.scss';

const Authorization: FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Слишком короткое имя')
      .max(20, 'Слишком длинное имя')
      .required('Поле не должо быть пустым'),
    email: Yup.string()
      .email('Неверный email')
      .required('Поле не должо быть пустым'),
  });

  return (
    <div>
      <InputForm />
    </div>
  );
};

export default Authorization;
