import React from "react";
import { useSelector } from "react-redux";
const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const Sidebar = () => {
  const globalOptions = useSelector((state) => state.global);
  const { showSidebar } = global;
  return (
    <div className="w-[300px] bg-white rounded shadow fixed top-5 left-5 bottom-5 transition-all ">
      {links.map((item) => (
        <div className="p-4 cursor-pointer hover:bg-gray-50" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
