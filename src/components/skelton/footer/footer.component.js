import React from "react";

const Year = new Date().getFullYear();
const Footer = () => {
  return <h6>Footer copyright {`${Year}-${Year + 1}`}</h6>;
};

export default Footer;
