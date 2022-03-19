import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import "./Navbar.css";

function Navbar() {

  const pages = ['About', 'Description', 'Risk Management', 'Scope & Span'];

  return (
    <div>
      <AppBar style={{ backgroundColor: "palegreen", zIndex: 1 }}>
        <Toolbar>
          <GiMaterialsScience fontSize={48} color="black" />
          {pages.map((page) => (
            <Button size="large" style={{marginLeft: 32}} >{page}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;