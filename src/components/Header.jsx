import React from "react";
import { StHeader } from "../GlobalStyles";

function Header() {
  return (
    <>
      <StHeader>
        <h1 style={{ margin: 0 }}>My Todo List</h1>
        <span>Olaf</span>
      </StHeader>
    </>
  );
}

export default Header;
