'use client'

import { useState, useEffect } from 'react'

import { Typography } from './Typography'
import { Tooltip } from './Tooltip'

export function Clock() {
  const [date, setDate] = useState<Date>(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <Tooltip text="São Paulo · Brasil">
      <Typography variant="muted" size="sm" className="sm:hidden md:block">
        {date.toLocaleString('pt-BR', {
          hour: '2-digit',
          minute: 'numeric',
          second: 'numeric',
        })}
      </Typography>
    </Tooltip>
  )
}
