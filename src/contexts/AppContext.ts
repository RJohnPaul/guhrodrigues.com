import { createContext } from "react";

import { ContextProps } from "@/types";

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

const AppContext = createContext<ContextProps>(initialValues);

export default AppContext;
