import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={require("../assets/logo.png")} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
