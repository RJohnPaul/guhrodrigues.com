import ReactDOM from "react-dom/client";
import "@/styles/global.css";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Provider
import Provider from "@/contexts/Provider";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Container from "@/components/ui/Container";
import Cursor from "@/components/utils/Cursor";
import AnimateEnter from "@/components/utils/AnimateEnter";

// Routes
import { AllRoutes } from "@/routes";

// Render
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Router>
        <Cursor />
        <AnimateEnter>
            <Provider>
                <Header />
                <Container>
                    <AllRoutes />
                </Container>
                <Footer />
            </Provider>
        </AnimateEnter>
    </Router>
);
