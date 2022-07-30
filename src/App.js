import * as React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardEvent from "./components/CardEvent";
import CardDetailsEvent from "./components/CardDetailsEvent";
import AdminCardEvent from "./components/AdminCardEvent";
import Searchh from "./components/Searchh";
import ProfilPage from "./components/ProfilPage";
import Event from "./components/Event";
import AdminEventPage from "./pages/AdminEventPage";
import EditEvent from "./pages/EditEvent";
// import "~bootstrap/scss/bootstrap";
// import '../node_modules/rsuite/styles/index.less';
// import 'rsuite/Button/styles/index.less';
// import '~rsuite/styles/index.less';
// import 'custom-theme.less';
// import NotFoundPage from "./pages/NotFoungPage";
// import HomePage from "./pages/HomePage";
// import AddEvent from "./component/event/AddEvent";
// import Event from "./component/event/Event.";
// import Reservation from "./component/reservations/Reservation";
// import CalandarBig from "./component/CalandarBig";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<CardEvent />} />
          <Route path="details" element={<CardDetailsEvent />} />
          <Route path="card" element={<CardEvent />} />
          <Route path="admin" element={<AdminEventPage />} />
          <Route path="search" element={<Searchh />} />
          <Route path="profil" element={<ProfilPage />} />
          <Route path="table" element={<Event />} />
          <Route path="edit" element={<EditEvent />} />
            {/* <Route index element={<HomePage />} />
            <Route path="form" element={<AddEvent />} />
            <Route path="events" element={<Event />} />
            <Route path="reserver" element={<Reservation />} />
            <Route path="home" element={<HomePage />} />
            <Route path="calandar" element={<CalandarBig />} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
