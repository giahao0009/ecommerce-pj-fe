import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/home";
import DashboardPage from "./page/dashboard";
import LoginPage from "./page/login";
import Dashboard from "./sections/dashboard";
import Products from "./sections/products";
import ProductsCreate from "./sections/products-create";
import ProductsCategories from "./sections/products-categories";
import ProductCategoriesCreate from "./sections/products-categories-create";
import ProductCategoriesEdit from "./sections/products-categories-edit";
import OrderSection from "./sections/order";
import OrderDetail from "./sections/order-detail";
import CustomersSection from "./sections/customers";
import CustomersCreate from "./sections/customers-create";
import CustomersEdit from "./sections/customers-edit";
import ProductsEdit from "./sections/products-edit";
import UsersSection from "./sections/users";
import UsersEdit from "./sections/users-edit";
import UsersCreate from "./sections/users-create";

const RouterDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />

        <Route path="/admin" element={<DashboardPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/create" element={<ProductsCreate />} />
          <Route path="products/:productId" element={<ProductsEdit />} />
          <Route path="products/category" element={<ProductsCategories />} />
          <Route
            path="products/category/create"
            element={<ProductCategoriesCreate />}
          />
          <Route
            path="products/category/:categoryId"
            element={<ProductCategoriesEdit />}
          />
          <Route path="orders" element={<OrderSection />} />
          <Route path="order/:id" element={<OrderDetail />} />
          <Route path="customers" element={<CustomersSection />} />
          <Route path="customers/create" element={<CustomersCreate />} />
          <Route path="customers/:customerId" element={<CustomersEdit />} />
          <Route path="users" element={<UsersSection />} />
          <Route path="users/create" element={<UsersCreate />} />
          <Route path="users/:accountId" element={<UsersEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDom;
