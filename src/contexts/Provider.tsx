import { useState } from "react";

import AppContext from "./AppContext";

export default function Provider({ children }) {
    const [showMenu, setShowMenu] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const value = {
        showMenu,
        setShowMenu,
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
