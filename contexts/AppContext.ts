import { createContext } from "react";

type Context = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showCommandMenu: boolean;
  setShowCommandMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isToastVisible: boolean;
  setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  submitting: boolean;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValues = {
  showMenu: false,
  setShowMenu: () => undefined,
  showCommandMenu: false,
  setShowCommandMenu: () => undefined,
  isToastVisible: false,
  setIsToastVisible: () => undefined,
  name: "",
  setName: () => undefined,
  email: "",
  setEmail: () => undefined,
  message: "",
  setMessage: () => undefined,
  submitting: false,
  setSubmitting: () => undefined,
};

const AppContext = createContext<Context>(initialValues);

export default AppContext;
