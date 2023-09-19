import { useRef } from "react";

import Lottie from "lottie-react";

import emailIcon from "@/assets/static/email.json";

import { Button } from "./Button";

export function SendButton({ submitting }) {
  const emailRef = useRef<any>();

  return (
    <Button
      type="submit"
      onMouseEnter={() => emailRef.current?.play()}
      onMouseLeave={() => emailRef.current?.stop()}
      disabled={submitting}
      className="disabled:bg-primary/70"
    >
      {submitting ? (
        <span>Enviando...</span>
      ) : (
        <>
          <span>Enviar</span>
          <Lottie
            lottieRef={emailRef}
            animationData={emailIcon}
            style={{ width: 14, height: 14 }}
            autoplay={false}
            loop={false}
          />
        </>
      )}
    </Button>
  );
}
