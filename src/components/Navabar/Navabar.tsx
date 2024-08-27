import React, { useState } from "react";
import { Layout, Menu, Dropdown, Button, Drawer } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

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
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width:"100%"
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
        <div className="logo" style={{ color: "#fff", fontSize: "24px" }}>
          MyLogo
        </div>

         

        {/* Menu for larger screens */}
        <Menu
          theme="dark"
          mode="horizontal"
          className="menu-desktop"
          style={{ flex: 1 }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
        {/* user menu for large screens */}
        <Dropdown overlay={menu} >
          <Button type="primary">
            User <DownOutlined />
          </Button>
        </Dropdown>

       
      </Header>
    </Layout>
  );
};

export default Navbar;
