import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const getNavElement = links.map((link)=> {
    return <a href={`#${link}`}  key = {link}> {link}</a>
  })

  return <nav>{getNavElement }</nav>;


}
export default NavBar;
