import { useLocation, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Pricing from "../pages/Pricing/Pricing";
import PageNav from "../components/PageNav/PageNav";
import AppLayout from "../pages/AppLayout/AppLayout";
import CityList from "../components/CityList/CityList";

const AppRoutes = ({ cityList }) => {
  const location = useLocation();
  const hideNavRoutes = ["/app"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNav && <PageNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="cities" element={<CityList cityList={cityList} />} />
          <Route path="cities/:id" element={<h2>Country List</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
