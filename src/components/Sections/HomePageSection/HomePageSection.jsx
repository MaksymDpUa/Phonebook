import { useAuth } from 'hooks/useAuth';
import css from './HomePageSection.module.css';
import { HomeSection, MainTitle } from './HomePageSection.styled';

const HomePageSection = () => {
  const {
    isLoggedIn,
    user: { name },
  } = useAuth();

  return (
    <HomeSection>
      <MainTitle>Welcome, to your Phonebook!</MainTitle>
      {isLoggedIn ? (
        <p>
          Glad to see you, <span className={css.userName}>{name}</span> !{' '}
        </p>
      ) : (
        <p>Please, log in or register to start</p>
      )}
    </HomeSection>
  );
};

export default HomePageSection;
