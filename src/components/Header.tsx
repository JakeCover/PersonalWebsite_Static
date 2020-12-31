import React from "react";
import "./Header.scss";
import { Button, Typography } from "antd";

const { Title } = Typography;

export const Header = () => {
  return (
    <header>
      <Button type={"text"} href="index.html" className="navbar-brand">
        <Title>Jake Cover</Title>
      </Button>

      <a className="nav-link" href="index.html">
        Home
      </a>

      <a className="nav-link" href="contact.html">
        Contact
      </a>
      <a className="nav-link" href="resume.html">
        Resume
      </a>
      <a className="nav-link" href="https://github.com/JakeCover">
        GitHub
      </a>
    </header>
  );
};
