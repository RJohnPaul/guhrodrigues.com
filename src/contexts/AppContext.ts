// React Hooks
import { createContext } from "react";

// Types
import { ContextProps } from "@/types";

// InitalValue
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
