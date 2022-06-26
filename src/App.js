import * as React from "react";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoungPage";
import HomePage from "./pages/HomePage";
import AddEvent from "./component/event/AddEvent";
import Layout from "./component/Layout";
import Event from "./component/event/Event.";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="form" element={<AddEvent />} />
            <Route path="events" element={<Event />} />
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
