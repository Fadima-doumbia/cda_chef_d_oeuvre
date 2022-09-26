import React from "react";
import AuthGaurd from "./AuthGaurd";

const RootGaurd = ({ children }) => {
  return <AuthGaurd>{children}</AuthGaurd>;
};

export default RootGaurd;