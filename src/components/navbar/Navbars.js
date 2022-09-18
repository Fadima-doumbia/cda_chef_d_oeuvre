import { useState, useEffect } from "react";
import "./NavBar.css";
import { Calendar, Gear } from "@rsuite/icons";
import { Navbar, Nav } from "rsuite";
import { Magic } from "react-bootstrap-icons";
import eventBus from "../../common/EventBus";
import AuthService from "../../services/auth.service";
import Button from "react-bootstrap/Button";

export default function Navbars() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(currentUser);

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_ENTREPRENEUR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    if (user !== null) {
      // console.log(user);
      setIsAuth(true);
    }
    eventBus.on("logout", () => {
      logOut();
    });
    return () => {
      eventBus.remove("logout");
    };
  }, [refresh]);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
    setIsAuth(false);
    // console.log(currentUser);
  };
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Eagle Event
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {isAuth ? (
            <li>
              <a href="/event">
                <Magic />
                Home
              </a>
            </li>
          ) : null}

          {isAuth ? (
            <li>
              <a href="/profil">Profil</a>
            </li>
          ) : null}

          {/* {isAuth ? (
          ) : null} */}

          {isAuth ? (
            <li>
              <a href="/admin">Admin</a>
            </li>
          ) : null}

          {isAuth ? (
            <li>
              <a href="/calendar">
                <Calendar />
                Calendar
              </a>
            </li>
          ) : null}

          {isAuth ? (
            <li>
              <a href="/search">SEARCH</a>
            </li>
          ) : null}

          {isAuth ? (
            <li>
              <Button onClick={logOut}>logout</Button>
            </li>
          ) : null}

          {isAuth ? null : (
            <li>
              <a href="/login">Login</a>
            </li>
          )}

          {isAuth ? null : (
            <li>
              <a href="/register">Register</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
