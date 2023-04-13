import React from "react";

function Footer() {
  return (
    <footer className="bg-[#171717] px-20 lg:px-4 py-6 text-center">
      <h5>
        © {new Date().getFullYear()} <span className="font-bold">ComfySloth </span> All rights
        reserved
      </h5>
    </footer>
  );
}

export default Footer;
