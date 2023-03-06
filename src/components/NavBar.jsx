import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ isFooter }) => {
  const [nav, setNav] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];

    if (lastPart === "overview") {
      setNav(1);
    } else if (lastPart === "candidates") {
      setNav(2);
    } else if (lastPart === "statistics") {
      setNav(3);
    } else if (lastPart === "poll") {
      setNav(3);
    } else if (lastPart === "lga") {
      setNav(3);
    }else{
      setNav(0);
    }
  }, [location]);


  return (
    <div className={`navBar ${isFooter && "mb"}`}>
      <div className="logo">
        <Link to={"/"}><img src="https://interview.sirv.com/icons/icons8-check-all-480.png" alt="" /></Link>
        <Link to={"/"}><label>Election App</label></Link>
      </div>
      <div className={`urls ${isFooter && "foot"}`}>
        <Link to={"/"} onClick={() => setNav(0)} className={`li ${nav === 0 && "active"}`}>Homepage</Link>
        <Link to={"/overview"} onClick={() => setNav(1)} className={`li ${nav === 1 && "active"}`}>Overview</Link>
        <Link to={"/candidates"} onClick={() => setNav(2)} className={`li ${nav === 2 && "active"}`}>Canditates</Link>
        <Link to={"/statistics"} onClick={() => setNav(3)} className={`li ${nav === 3 && "active"}`}>Statistics</Link>
      </div>
    </div>
  )
}

export default NavBar