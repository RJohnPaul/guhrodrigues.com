'use client'

import { useState, useContext } from 'react'

import AppContext from './AppContext'

export function Provider({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [position, setPosition] = useState(0)
  const [visible, setVisible] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState('')

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
    isVisible,
    setIsVisible,
    hovered,
    setHovered,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useHooks() {
  return useContext(AppContext)
}
