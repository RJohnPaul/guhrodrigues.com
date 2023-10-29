import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CheckCircle2, XCircle } from "lucide-react";

export function Toast() {
  return (
    <ToastContainer
      className="flex items-center justify-center"
      position="bottom-center"
      autoClose={5000}
      newestOnTop={false}
      hideProgressBar={true}
      transition={Slide}
      toastStyle={{
        backgroundColor: "#222",
        color: "#d4d4d4",
        borderRadius: "0.5rem",
        fontSize: "14px",
        fontWeight: 500,
        border: "1px solid #333",
        userSelect: "none",
        width: "250px",
      }}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}

export function successAlert(text: string) {
  toast.success(`${text}`, {
    icon: <CheckCircle2 className="text-emerald-400" size={24} />,
  });
}

export function errorAlert(text: string) {
  toast.error(`${text}`, {
    icon: <XCircle className="text-red-400" size={24} />,
  });
}
