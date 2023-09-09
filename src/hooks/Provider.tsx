import { useState, useContext } from "react";

import AppContext from "./AppContext";

export default function Provider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const value = {
    showMenu,
    setShowMenu,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    position,
    setPosition,
    visible,
    setVisible,
    submitting,
    setSubmitting,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useHooks() {
  return useContext(AppContext);
}
