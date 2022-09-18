// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import AuthService from "./services/auth.service";

// function RequireAuth({ children }) {
//     const { authed } = AuthService.getCurrentUser();
//     const [successful, setSuccessful] = useState(AuthService.getCurrentUser());
//     console.log(authed);
//     console.log(successful);
//     return authed === true ? children : <Navigate to="/login" replace />;

//   }

//   export default RequireAuth;