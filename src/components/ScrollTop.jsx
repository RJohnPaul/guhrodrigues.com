import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      top="20"
      className="flex justify-center items-center"
      style={{ background: "#0062A7", boxShadow: "none" }}
      color="#000"
      width="20px"
      height="20px"
    />
  );
};

export default ScrollTop;
