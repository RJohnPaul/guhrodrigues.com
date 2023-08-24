import { Navigate, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home title="Gustavo Rodrigues" />} />
            <Route
                path="/about"
                element={<About title="Sobre" />}
            />
            <Route
                path="/projects"
                element={<Projects title="Projetos" />}
            />
            <Route
                path="/contact"
                element={<Contact title="Contato" />}
            />
            <Route
                path="/404"
                element={<NotFound title="Not Found" />}
            />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}
