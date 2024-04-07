import React from "react";
import { Nav } from "./nav/nav";
import "./header.styles.scss"

export function Header() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <header>
      {/* <div>Header with Logo and nav</div> */}
      <Nav />
      
    </header>
  );
}