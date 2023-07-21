// React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icon
import { CheckCircle2 } from "lucide-react";

// Toast Container
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

// Download Alert
export const downloadAlert = () => {
    toast.success("Currículo instalado :D", {
        icon: (
            <CheckCircle2
                className="text-emerald-400"
                weight="bold"
                size={24}
            />
        ),
    });
};

// Send Email Alert
export const sendEmailAlert = () => {
    toast.success("Email enviado :D", {
        icon: (
            <CheckCircle2
                className="text-emerald-400"
                weight="bold"
                size={24}
            />
        ),
    });
};
