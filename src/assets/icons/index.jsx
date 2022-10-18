import React from "react";
import {
  FaWallet,
  FaProductHunt,
  FaFileInvoiceDollar,
  FaUserAlt,
  FaUserCircle,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiHumanPyramid, GiHamburgerMenu } from "react-icons/gi";

function Icon({ icon, style, onClick }) {
  if (icon === "") return null;
  if (icon === "FaWallet") return <FaWallet style={style} />;
  if (icon === "AiFillHome") return <AiFillHome style={style} />;
  if (icon === "FaProductHunt") return <FaProductHunt style={style} />;
  if (icon === "FaFileInvoiceDollar")
    return <FaFileInvoiceDollar style={style} />;
  if (icon === "GiHumanPyramid") return <GiHumanPyramid style={style} />;
  if (icon === "FaUserAlt") return <FaUserAlt style={style} />;
  if (icon === "GiHamburgerMenu") return <GiHamburgerMenu style={style} />;
  if (icon === "FaUserCircle") return <FaUserCircle style={style} />;
}

export default Icon;
