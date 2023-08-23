import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LogInSection.module.css';

const LogInSection = () => {
  return (
    <section className={css.section}>
      <h1>Please, log in into your accaunt</h1>
      <LoginForm />
    </section>
  );
};

export default LogInSection;
