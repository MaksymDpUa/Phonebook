import { useAuth } from 'hooks/useAuth';
import css from './HomePageSection.module.css';

const HomePageSection = () => {
  const {
    isLoggedIn,
    user: { name },
  } = useAuth();

  return (
    <section className={css.section}>
      <h1>Welcome, to your Phonebook!</h1>
      {isLoggedIn ? (
        <p>
          Glad to see you, <span className={css.userName}>{name}</span> !{' '}
        </p>
      ) : (
        <p>Please, log in or register to start</p>
      )}
    </section>
  );
};

export default HomePageSection;
