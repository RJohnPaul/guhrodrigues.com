// React Hooks
import { createContext } from "react";

interface ContextProps {
    showMenu: boolean;
    setShowMenu: (newState: boolean) => void;
    pageScrolled: boolean;
    setPageScrolled: (newState: boolean) => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const initialValues = {
    showMenu: false,
    setShowMenu: () => undefined,
    pageScrolled: false,
    setPageScrolled: () => undefined,
    name: "",
    setName: () => undefined,
    email: "",
    setEmail: () => undefined,
    message: "",
    setMessage: () => undefined,
};

// AppContext
const AppContext = createContext<ContextProps>(initialValues);

export default AppContext;
