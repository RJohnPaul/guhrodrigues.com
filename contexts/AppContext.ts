import { createContext } from "react";

type Context = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  submitting: boolean;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showCommandMenu: boolean;
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues = {
  showMenu: false,
  setShowMenu: () => undefined,
  name: "",
  setName: () => undefined,
  email: "",
  setEmail: () => undefined,
  message: "",
  setMessage: () => undefined,
  visible: true,
  setVisible: () => undefined,
  submitting: true,
  setSubmitting: () => undefined,
  isVisible: false,
  setIsVisible: () => undefined,
  showCommandMenu: false,
  setShowCommandMenu: () => undefined,
};

const AppContext = createContext<Context>(initialValues);

export default AppContext;
