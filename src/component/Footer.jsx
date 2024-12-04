import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      &copy;<span>{new Date().getFullYear()}</span> RamyaPortfolio
    </footer>
  );
};
