import React from "react";
import "./Header.scss";
import { Space } from "antd";
import { Link } from "react-router-dom";
import {MenuOutlined} from "@ant-design/icons";


export const Header = () => {
  function showHideHamburger() {
    var x = document.getElementById("myHeader");
    // @ts-ignore
    if (x.className === "header") {
      // @ts-ignore
      x.className += " responsive";
    } else {
      // @ts-ignore
      x.className = "header";
    }
  }

  return (
    <header className={"header"} id={"myHeader"}>
      <Link to="/" className="navbar-brand">
        <h1>Jake Cover</h1>
      </Link>

      <Space className={"headerLinks"}>
        <Link className="nav-link" to="/">
          <h2>Home</h2>
        </Link>

        <Link className="nav-link" to="/contact">
          <h2>Contact</h2>
        </Link>
        <Link className="nav-link" to="/resume">
          <h2>Resume</h2>
        </Link>
        <a className="nav-link" href="https://github.com/JakeCover">
          <h2>GitHub</h2>
        </a>
        <a
          href={void(0)}
          className="icon"
          onClick={() => showHideHamburger()}
        >
          <MenuOutlined className={"fa fa-bars"}/>
        </a>
      </Space>
    </header>
  );
};
