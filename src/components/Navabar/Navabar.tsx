import React, { useState } from "react";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="bg-red-500">
      <Header
        className="bg-red-500"
        style={{
          padding: "16px",
          display: "flex",
          color: "white",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Hamburger Menu for smaller screens */}
        <MenuOutlined
          className="menu-mobile"
          onClick={showDrawer}
          style={{ color: "#fff", fontSize: "24px" }}
        />
        {/* navLinks for small screen */}
        <Drawer
          title="Menu"
          placement="left"
          onClose={closeDrawer}
          visible={visible}
          className="menu-mobile-drawer"
        >
          <Menu mode="vertical">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Drawer>
        <div className="logo" style={{ fontSize: "24px", maxWidth: "200px" }}>
          <img
            src="https://i.ibb.co/1RYsdcG/Screenshot-2024-08-27-211901-removebg-preview.png"
            alt=""
          />
        </div>

        {/* Menu for larger screens */}
        <Menu
          mode="horizontal"
          style={{
            color: "white",
            display: "flex",
            gap: "20px",
          }}
          className="menu-desktop bg-red-500"
          // style={{ flex: 1 }}
        >
          <NavLink
            to="/"
            style={{
              color: "white",
            }}
            key="1"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            style={{
              color: "white",
            }}
            key="2"
          >
            About
          </NavLink>
          <NavLink
            to="/"
            style={{
              color: "white",
            }}
            key="3"
          >
            Contact
          </NavLink>
        </Menu>
        {/* user menu for large screens */}
        <Dropdown className="bg-red-500 flex hover:bg-red-500" overlay={menu}>
          <div className="flex gap-2 ">
            <img
            className="w-[40px] rounded-[50%]"
              src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
              alt=""
            />{" "}
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
    </Layout>
  );
};

export default Navbar;
