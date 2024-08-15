import React from "react";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((store) => store.userReducer);
  console.log("🚀 ~ Browse ~ user:", user);
  return (
    <div>
      <h1>Browse</h1>
    </div>
  );
};

export default Browse;
