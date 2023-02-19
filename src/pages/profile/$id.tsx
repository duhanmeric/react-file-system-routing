import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return <div>id: {id} profile!</div>;
};

export default Profile;
