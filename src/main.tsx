import ReactDOM from "react-dom/client";
import "@/styles/global.css";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Provider
import Provider from "@/contexts/Provider";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Cursor from "@/components/Cursor";

// Routes
import { AllRoutes } from "@/routes";

// Render
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Router>
        <Cursor />

        <Provider>
            <Header />

            <Container>
                <AllRoutes />
            </Container>

            <Footer />
        </Provider>
    </Router>
);
