import { useRef } from "react";

import Lottie from "lottie-react";

import emailIcon from "@/assets/static/email.json";

import { Button } from "./Button";

export function SendButton({ submitting }) {
  const emailRef = useRef<any>();

  return (
    <Button
      type="submit"
      disabled={submitting}
      className="disabled:bg-primary/70"
    >
      {submitting ? (
        <Lottie
          lottieRef={emailRef}
          animationData={emailIcon}
          style={{ width: 20, height: 20 }}
          autoplay={true}
          loop={true}
        />
      ) : (
        <span>Enviar</span>
      )}
    </Button>
  );
}
