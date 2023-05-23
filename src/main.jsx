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
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <HeaderMobile />
    <Toast />
    <Routes>
      <Route path="/" element={<Home title="Gustavo Rodrigues — Início" />} />
      <Route
        path="/about"
        element={<About title="Gustavo Rodrigues — Sobre" />}
      />
      <Route
        path="/skills"
        element={<Skills title="Gustavo Rodrigues — Habilidades" />}
      />
      <Route
        path="/projects"
        element={<Projects title="Gustavo Rodrigues — Projetos" />}
      />
      <Route
        path="/*"
        element={<NotFound title="Gustavo Rodrigues — Not Found" />}
      />
    </Routes>
    <Footer />
  </Router>
);
