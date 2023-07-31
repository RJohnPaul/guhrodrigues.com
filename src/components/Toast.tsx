import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CheckCircle2 } from "lucide-react";

export default function Toast() {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            newestOnTop={false}
            hideProgressBar={true}
            toastStyle={{
                backgroundColor: "#222",
                color: "#fff",
                borderRadius: "4px",
                fontSize: "14px",
                border: "1px solid #333",
                userSelect: "none",
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

export const downloadAlert = () => {
    toast.success("Currículo instalado :D", {
        icon: <CheckCircle2 className="text-emerald-400" size={24} />,
    });
};

export const sendEmailAlert = () => {
    toast.success("Email enviado :D", {
        icon: <CheckCircle2 className="text-emerald-400" size={24} />,
    });
};
