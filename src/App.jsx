// Components
import Toast from "./components/Toast";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Toast />
      <ScrollProgress />
      <Header />
      <HeaderMobile />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default App;