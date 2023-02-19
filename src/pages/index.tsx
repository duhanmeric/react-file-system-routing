import LazyImage from "@/components/LazyImage";
import React from "react";
import Logo from "../assets/react.svg";

const Home = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img src={Logo} />
      <div style={{ marginTop: "auto" }}>
        <LazyImage src={Logo} alt="react logo" />
      </div>
    </div>
  );
};

export default Home;
