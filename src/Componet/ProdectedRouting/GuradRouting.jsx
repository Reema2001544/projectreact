import React from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import { Navigate } from "react-router-dom";

export default function GuradRouting(props) {
  if (localStorage.getItem("userToken") != null) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
