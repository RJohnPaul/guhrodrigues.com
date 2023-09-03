import ReactDOM from "react-dom/client";
import "@/styles/global.css";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

// Provider
import Provider from "@/hooks/Provider";

// Components
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Container from "@/components/ui/Container";
import AnimateEnter from "@/components/utils/AnimateEnter";

// Routes
import { AllRoutes } from "@/routes";

// Render
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
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
