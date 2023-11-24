import { HeaderMobile } from 'components/Header/HeaderMobile/HeaderMobile';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const {
    user: { name },
  } = useAuth();

  const { isLoggedIn } = useAuth();

  return (
    // <div className={css.container}>
    <>
      <header className={css.headerContainer}>
        <HeaderMobile />
        <nav className={css.nav}>
          <NavLink to="/" className={css.navText}>
            Home Page
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={css.navText}>
              Contacts
            </NavLink>
          )}
          {isLoggedIn ? (
            <div className={css.forLoggeded}>
              {/* <NavLink to="/contacts" className={css.navText}>
                Contacts
              </NavLink> */}
              <p className={css.greating}>
                Hello, <span className={css.userName}>{name}</span>!{' '}
              </p>
              <button
                type="button"
                onClick={handleLogOut}
                className={css.btnLogout}
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className={css.authorization}>
              <NavLink to="/login" className={css.navText}>
                LogIn
              </NavLink>
              <NavLink to="/register" className={css.navText}>
                Register
              </NavLink>
            </div>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
    // </div>
  );
};
