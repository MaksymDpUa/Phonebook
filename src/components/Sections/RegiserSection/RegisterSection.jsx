import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import css from './RegisterSection.module.css'

const RegisterSection = () => {
  return (
    <section className={css.section}>
      <h1>Please, create your account</h1>
      <RegisterForm></RegisterForm>
    </section>
  );
};

export default RegisterSection;
