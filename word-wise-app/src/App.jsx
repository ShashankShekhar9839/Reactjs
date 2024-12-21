import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:9000/cities");
      let data = await res.json();
      setCities(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <BrowserRouter>
        <AppRoutes cityList={cities} />
      </BrowserRouter>
    </>
  );
}

export default App;
