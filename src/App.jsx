import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<Services/>} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
