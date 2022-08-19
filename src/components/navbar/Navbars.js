import { useState } from 'react';
import './NavBar.css'
import { Calendar, Gear } from '@rsuite/icons';
import { Navbar, Nav } from 'rsuite';
import { Magic } from "react-bootstrap-icons";


export default function Navbars() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
      <nav className="navigation" >

        <a href="/" className="brand-name">
          Eagle Event
        </a>
        <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
        >
          {/* icon from heroicons.com */}
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
          className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
          >
          <ul>
            <li>
              <a href="/event" ><Magic />Home</a>
            </li>
            <li>
              <a href="/profil">Profil</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            <li>
              <a href="/calendar" ><Calendar />Calendar</a>
            </li>
            <li>
              <a href="/search">SEARCH</a>
            </li>
            {/* <li>
              <a href="/admin">Team</a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }

