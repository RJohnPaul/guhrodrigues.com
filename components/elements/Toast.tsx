import { Toaster } from "react-hot-toast";

type ToastMessageProps = {
  title: string;
  message: string;
};

const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          border: "1px solid #2D2E30",
          background: "#15161A",
          color: "#fff",
          fontSize: "15px",
        },
      }}
    />
  );
};

const ToastMessage = (props: ToastMessageProps) => {
  const { title, message } = props;

  return (
    <div className="flex flex-col">
      <div className="text-primary/80">{title}</div>
      <div className="text-sm text-foreground">{message}</div>
    </div>
  );
};

export { Toast, ToastMessage };
