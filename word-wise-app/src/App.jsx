import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import AppLayout from "./pages/AppLayout/AppLayout";
import CityList from "./components/CityList/CityList";
import City from "./components/City/City";
import CountryList from "./components/CountryList/CountryList";
import Form from "./components/Form/Form";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
