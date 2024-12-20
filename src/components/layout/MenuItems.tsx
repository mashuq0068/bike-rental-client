/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUser, FiSettings } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";
import { Menu, MenuProps } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { MdOutlineDirectionsBike } from "react-icons/md";

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  url?: string;
};

const adminItems: MenuItem[] = [
  {
    key: "profile",
    label: "Profile",
    icon: <FiUser />, 
    url: "/dashboard/admin/profile",
  },
  {
    key: "bike-management",
    label: "Bike Management",
    icon: < MdOutlineDirectionsBike/>, 
    url: "/dashboard/admin/bike-management",
  },
  {
    key: "user-management",
    label: "User Management",
    icon: <FiSettings />, 
    url: "/dashboard/admin/user-management",
  },
  {
    key: "return-bike",
    label: "Return Bike",
    icon: < MdOutlineDirectionsBike />, 
    url: "/dashboard/admin/return-bike",
  },
  {
    key: "coupon-management",
    label: "Coupon Management",
    icon: <AiOutlineGift />, 
    url: "/dashboard/admin/coupon-management",
  },
  {
    key: "home",
    label: "Home",
    icon: <FiHome />, 
    url: "/",
  },
];

const userItems: MenuItem[] = [
  {
    key: "profile",
    label: "Profile",
    icon: <FiUser />, 
    url: "/dashboard/user/profile",
  },
  {
    key: "bike-management",
    label: "Bike Management",
    icon: < MdOutlineDirectionsBike />, 
    url: "/dashboard/user/bike-management",
  },
  {
    key: "my-rental",
    label: "My Rental",
    icon: <FiSettings />, 
    url: "/dashboard/user/my-rental",
  },
];
const MenuItems: React.FC = () => {
  const user = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const items = user?.role === "admin" ? adminItems : userItems;
  // const defaultSelectedKey = items.find((item) =>
  //   location.pathname.startsWith(item.url || "")
  // )?.key || false;

  const handleClick: MenuProps["onClick"] = (e) => {
    const clickedItem = items.find(
      (item) => item.key === e.key
    ) as any;
    if (clickedItem?.url) {
      navigate(clickedItem.url);
    }
  };

  return (
    <div className="menu-bar z-50 bg-gray-900 fixed top-0 w-full lg:w-auto left-0 ">
      {/* Logo and Menu Icon Section */}
      <div className="flex items-center justify-between w-full lg:w-64 h-full bg-[#263148] p-5">
        <div className="text-xl xl:text-2xl text-white uppercase font-bold">
          <span className="">Bik</span>Ease.
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

        {/* Sidebar Menu */}
        <div
        className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      
        <Menu
          onClick={handleClick}
          selectedKeys={[location.pathname.split("/")[3]]}
          mode="inline"
          items={items.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <span className="text-base">{item.label}</span>,
          }))}
          className="h-full border-none text-base"
        />
      </div>
    </div>
  );
};

export default MenuItems;
