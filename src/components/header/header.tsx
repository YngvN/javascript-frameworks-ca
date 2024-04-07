import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import { Nav } from "./nav/nav";
import { SearchBar } from "../main/searchbar/searchbar";
import * as S from "./header.styles";
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