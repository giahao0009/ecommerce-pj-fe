import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Homepage from "./page/home";
import DashboardPage from "./page/dashboard";
import LoginPage from "./page/login";
import Dashboard from "./sections/dashboard";
import Products from "./sections/products";

const PrivateRoute = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

const RouterDom = ({ checkToken }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<DashboardPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDom;
