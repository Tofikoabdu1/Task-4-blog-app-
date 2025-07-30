import React from "react";
import facebook from "../assets/facebook.png";
import telegram from "../assets/telegram.png";
import gmail from "../assets/gmail.png";
const Footer = () => {
  return (
    <footer
      className="bg-[#1e1e1e] text-white py-4 mt-5 rounded-2xl flex justify-between items-center"
      style={{ fontFamily: "K2D" }}
    >
      <h1 className="text-2xl font-semibold ml-5">Blogs</h1>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 mx-5">
        <img src={facebook} alt="Facebook" className="bg-white w-8 h-8" />
        <img src={telegram} alt="Telegram" className="w-8 h-8" />
        <img src={gmail} alt="Gmail" className="w-8 h-8 mr-5" />
      </div>
    </footer>
  );
};

export default Footer;
