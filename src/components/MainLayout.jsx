import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
