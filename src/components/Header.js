import React, { useState, useEffect } from "react";

//import components
import Nav from "../components/Nav";
import Socials from "../components/Socials";
// import logo
import LogoWhite from "../assets/img/header/logo-white.png";

//import motion
import { motion } from "framer-motion";

//import variants
import { fadeIn, staggerContainer } from "../variants";

// header variants
const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background:"rgba(0,0,0,0.92)"
  },
};

const Header = () => {
  return <header className="bg-pink-200">header</header>;
};

export default Header;
