// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      newestOnTop={false}
      progressStyle={{ background: "#D2EAFF" }}
      toastStyle={{
        backgroundColor: "#1d4ed8",
        color: "#D2EAFF",
        borderRadius: "5px",
        fontWeight: "600",
      }}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default Toast;
