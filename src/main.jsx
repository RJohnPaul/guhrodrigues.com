// React
import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS
import "./styles/global.css";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <HeaderMobile />
    <Routes>
      <Route path="/" element={<Home title="Gustavo Rodrigues — Início" />} />
      <Route
        path="/about"
        element={<About title="Gustavo Rodrigues — Sobre" />}
      />
      <Route
        path="/projects"
        element={<Projects title="Gustavo Rodrigues — Projetos" />}
      />
      <Route
        path="*"
        element={<NotFound title="Gustavo Rodrigues — Not Found" />}
      />
    </Routes>
    <Footer />
  </Router>
);
