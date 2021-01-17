import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <NavLink
        exact
        to="/"
        className="navigation"
        activeClassName="navigation__active"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/movies"
        className="navigation"
        activeClassName="navigation__active"
      >
        Movies
      </NavLink>
    </header>
  );
}
