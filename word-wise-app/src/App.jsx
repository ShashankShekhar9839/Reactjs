import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "../src/pages/Product/Product";
import Pricing from "../src/pages/Pricing/Pricing";
import PageNav from "../src/components/PageNav/PageNav";
import "./App.css";
import AppLayout from "./pages/AppLayout/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
