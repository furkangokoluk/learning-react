import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return <div>About
    <hr />
    <Link style={{marginRight:"6px"}} to={"employee"}>Çalışanlar Hakkında</Link>
    <Link to={"company"}>Şirket Hakkında</Link>

    <Outlet/>
  </div>;
}

export default About;
