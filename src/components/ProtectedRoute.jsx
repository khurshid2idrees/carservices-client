import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const user = useSelector((state) => state.cart.user);

  if (user.name) {
    return children;
  }

  window.location.href = "/login";
}
