import React from "react";
import { NavLink } from "react-router-dom";

const Campaigns = () => {
  return (
    <div>
      Campaigns
      <br />
      <NavLink to="/campaigns/brands">Brands</NavLink>
    </div>
  );
};

export default Campaigns;
