import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header
        style={{ display: "flex", backgroundColor: "black", padding: 20 }}
      >
        <NavLink to="/" style={{ color: "white" }}>
          Home
        </NavLink>
        <NavLink
          style={{ marginRight: 10, marginLeft: 10, color: "white" }}
          to="/about"
        >
          about
        </NavLink>
        <NavLink to="/contact" style={{ color: "white" }}>
          contact
        </NavLink>
        <NavLink
          to={`/profile/${Math.floor(Math.random() * 100)}`}
          style={{ color: "white", marginRight: 10, marginLeft: 10 }}
        >
          profile
        </NavLink>

        <NavLink
          to="/campaigns"
          style={{ color: "white", marginRight: 10, marginLeft: 10 }}
        >
          campaigns
        </NavLink>
      </header>
      {children}
    </>
  );
};

export default Layout;
