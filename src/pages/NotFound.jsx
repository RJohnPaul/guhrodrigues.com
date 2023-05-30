// React Hooks
import { useEffect } from "react";

// Framer Motion
import { motion } from "framer-motion";

// React Router
import { Link } from "react-router-dom";

// Phosphor React
import { ArrowLeft } from "phosphor-react";

// Not Found
const NotFound = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <section
      className="w-full relative h-[80vh] flex text-center items-center justify-center"
      id="home"
    >
      <div className="flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex flex-col gap-4 text-center"
        >
          <p className="flex gap-1 justify-center md:text-[20px] font-medium mb-1">
            <span className="text-gray-400">
              A página que você está tentando acessar não existe.
            </span>
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Link to="/">
              <button className="group flex text-center items-center lg:text-[16px] gap-2 font-medium py-3 px-5 rounded-2xl border-2 border-transparent text-white bg-primary duration-300 hover:bg-primary/70">
                <ArrowLeft
                  weight="bold"
                  className="group-hover:-translate-x-1 transition-all"
                  size={20}
                />
                voltar
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
