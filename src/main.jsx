// React
import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS
import "./styles/global.css";

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// Provider
import Provider from "./contexts/Provider";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <Provider>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home title="Gustavo Rodrigues — Início" />}
                />
                <Route
                    path="/about"
                    element={<About title="Gustavo Rodrigues — Sobre" />}
                />
                <Route
                    path="/projects"
                    element={<Projects title="Gustavo Rodrigues — Projetos" />}
                />
                <Route
                    path="/contact"
                    element={<Contact title="Gustavo Rodrigues — Contato" />}
                />
                <Route
                    path="/404"
                    element={<NotFound title="Gustavo Rodrigues — Not Found" />}
                />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
        </Provider>
    </Router>
);
