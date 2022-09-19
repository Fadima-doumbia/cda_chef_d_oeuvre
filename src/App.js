import * as React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Layout from "./pages/layout/Layout";
import CardDetailsEvent from "./components/modal - card/CardDetailsEvent";
import AdminEventPage from "./pages/AdminEventPage";
import Searchh from "./components/Searchh";
import ProfilPage from "./pages/ProfilPage";
import Event from "./pages/Event";
import CalendarPage from "./pages/CalendarPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import BoardAdmin from "./pages/BoardAdmin";
import ReservationPage from "./pages/ReservationPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="details" element={<CardDetailsEvent />} />
            <Route path="admin" element={<AdminEventPage />} />
            <Route path="search" element={<Searchh />} />
            <Route path="profil" element={<ProfilPage />} />
            <Route path="event" element={<Event/>} />
            <Route path="calendar" element={<CalendarPage/>} />
            <Route path="home" element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="user" element={<BoardUser/>} />
            <Route path="mod" element={<BoardModerator/>} />
            <Route path="admin" element={<BoardAdmin/>} />
            <Route path="reservation" element={<ReservationPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
