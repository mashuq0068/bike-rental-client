import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icon from react-icons
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useAppSelector } from "../../redux/hooks";

interface CustomMenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  url?: string;
  children?: CustomMenuItem[];
}

const adminItems: CustomMenuItem[] = [
  {
    key: "sub1",
    label: "Profile",
    icon: <MailOutlined />,
    url: "/dashboard/admin/profile",
  },
  {
    key: "sub2",
    label: "Bike Management",
    icon: <AppstoreOutlined />,
    url: "/dashboard/admin/bike-management",
  },
  {
    key: "sub4",
    label: "User Management",
    icon: <SettingOutlined />,
    url: "/dashboard/admin/user-management",
  },
  {
    key: "sub5",
    label: "Return Bike",
    icon: <SettingOutlined />,
    url: "/dashboard/admin/return-bike",
  },
  {
    key: "sub6",
    label: "Coupon Management",
    icon: <SettingOutlined />,
    url: "/dashboard/admin/coupon-management",
  },
  {
    key: "sub7",
    label: "Home",
    icon: <SettingOutlined />,
    url: "/",
  },
];
const userItems: CustomMenuItem[] = [
  {
    key: "sub1",
    label: "Profile",
    icon: <MailOutlined />,
    url: "/dashboard/user/profile",
  },
  {
    key: "sub2",
    label: "Bike Management",
    icon: <AppstoreOutlined />,
    url: "/dashboard/user/bike-management",
  },
  {
    key: "sub4",
    label: "My Rental",
    icon: <SettingOutlined />,
    url: "/dashboard/user/my-rental",
  },
];
const MenuItems: React.FC = () => {
  const user = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const items = user?.role === "admin" ? adminItems : userItems;

  const handleClick: MenuProps["onClick"] = (e) => {
    const clickedItem = items.find(
      (item) => item.key === e.key
    ) as CustomMenuItem;
    if (clickedItem?.url) {
      navigate(clickedItem.url);
    }
  };

  return (
    <div className="menu-bar z-50 fixed top-0 w-full lg:w-auto left-0 ">
      {/* Logo and Menu Icon Section */}
      <div className="flex items-center justify-between w-full lg:w-64 h-full bg-[#ebe9e9] p-5">
        <div className="text-xl xl:text-2xl text-gray-800 font-extrabold">
          <span className="text-red-500">Bike</span>Ease
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Drawer (Sidebar Menu) */}
      <div
        className={`fixed top-0 left-0 bg-[#ebe9e9] h-full w-64 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <Menu
          onClick={handleClick}
          style={{ width: "100%" }}
          defaultSelectedKeys={["sub1"]}
          mode="inline"
          items={items.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            children: item.children?.map((child) => ({
              key: child.key,
              icon: child.icon,
              label: child.label,
            })),
          }))}
        />
      </div>
    </div>
  );
};

export default MenuItems;
