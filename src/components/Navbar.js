import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const pages = ["About", "Description", "Risk Management", "Scope & Span"];
  const paths = ["/about", "/description", "/risks", "/scopespan"];

  return (
    <div>
      <AppBar style={{ backgroundColor: "palegreen", zIndex: 1, cursor: "pointer" }}>
        <Toolbar>
          <GiMaterialsScience fontSize={48} color="black" onClick={() => navigate("/chemcamapp.github.io")} />
          {pages.map((page, pathIndex) => (
              <Button key={page} size="large" style={{marginLeft: 32}} onClick={() => navigate(paths[pathIndex])} >{page}</Button>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;