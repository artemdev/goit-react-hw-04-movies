import { NavLink } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

export default function Navbar() {
  return (
    <header>
      <NavLink
        exact
        to="/"
        className={styles.navigation__link}
        activeClassName={styles.navigation__linkActive}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/movies"
        className={styles.navigation__link}
        activeClassName={styles.navigation__linkActive}
      >
        Movies
      </NavLink>
    </header>
  );
}
