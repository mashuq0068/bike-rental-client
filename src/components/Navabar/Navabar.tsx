import {  useState } from "react";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
// import { FaMoon, FaSun } from "react-icons/fa";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/dashboard")} key="1">
        Profile
      </Menu.Item>
      <Menu.Item onClick={() => navigate("/dashboard")} key="2">
        Dashboard
      </Menu.Item>
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
          className="menu-mobile-drawer bg-red-500"
        >
          <Menu className="flex flex-col gap-12">
            <NavLink to="/dashboard/admin/profile" key="1">
              Dashboard
            </NavLink>
            <NavLink to="/" key="1">
              Home
            </NavLink>
            <NavLink to="/about-us" key="2">
              About
            </NavLink>
            <NavLink to="/" key="3">
              Contact
            </NavLink>
          </Menu>
        </Drawer>
        <div className="logo" style={{ fontSize: "24px", maxWidth: "200px" }}>
          <img
            onClick={() => navigate("/")}
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
          <NavLink to="/dashboard/admin/profile" key="1">
            Dashboard
          </NavLink>
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
            to="/about-us"
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
        {/* dark mode light mode */}
        {/* <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? (
            <FaMoon className="icon" />
          ) : (
            <FaSun className="icon" />
          )}
        </button> */}
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
