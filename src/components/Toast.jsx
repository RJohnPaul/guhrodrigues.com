// React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icon
import { CheckCircle } from "phosphor-react";

// Toast Container
const Toast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      newestOnTop={false}
      progressStyle={{
        background: "#D2EAFF",
        borderRadius: "5px",
        height: "2px",
      }}
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

// Download Alert
export const downloadAlert = () => {
  toast.success("Downloading...", {
    icon: <CheckCircle weight="bold" size={24} />,
  });
};

export default Toast;
