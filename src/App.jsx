// Components
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import ScrollTop from "./components/ScrollTop"
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <ScrollTop />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
