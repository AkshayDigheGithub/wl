import React, { Component } from "react";

const Year = new Date().getFullYear();
const Footer = () => {
  return <h6>WL copyright {`${Year}-${Year + 1}`}</h6>;
};

export default Footer;
