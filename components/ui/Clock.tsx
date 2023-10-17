"use client";

import { useState, useRef, useEffect } from "react";

import Lottie from "lottie-react";

import clockIcon from "@/assets/static/clock.json";

import { Tooltip } from "./Tooltip";

export function Clock() {
  const [date, setDate] = useState<Date>(new Date());
  const clockRef = useRef<any>();

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const hour = date.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <Tooltip text={`${hour} GMT-3`}>
      <Lottie
        lottieRef={clockRef}
        animationData={clockIcon}
        style={{ width: 20, height: 20 }}
        autoplay={true}
        loop={true}
      />
    </Tooltip>
  );
}
