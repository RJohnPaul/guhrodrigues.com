"use client";

import { useState, useContext } from "react";

import AppContext from "./AppContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const value = {
    showMenu,
    setShowMenu,
    showCommandMenu,
    setShowCommandMenu,
    isToastVisible,
    setIsToastVisible,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitting,
    setSubmitting,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useHooks = () => {
  return useContext(AppContext);
};

export { Provider, useHooks };
