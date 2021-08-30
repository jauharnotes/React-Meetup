import { Link } from "react-router-dom";
import clasess from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={clasess.header}>
      <h2 className={clasess.logo}>React Meetup</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">My Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
