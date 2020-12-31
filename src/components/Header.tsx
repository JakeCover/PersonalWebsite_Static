import React from "react";
import "./Header.scss";
import {Button, Space, Typography} from "antd";
import {Link} from "react-router-dom";

const {Title} = Typography;

export const Header = () => {
    return (
        <header>
            <Link to="/" className="navbar-brand">
                <h1>Jake Cover</h1>
            </Link>

            <Space>
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
            </Space>
        </header>
    );
};
