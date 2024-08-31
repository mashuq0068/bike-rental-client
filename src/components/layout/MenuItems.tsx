import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import type { MenuProps } from "antd";
  import { Menu } from "antd";
  
  type MenuItem = Required<MenuProps>["items"][number];
  
  const items: MenuItem[] = [
    {
      key: "sub1",
      label: "Profile",
      icon: <MailOutlined />,
    },
    {
      key: "sub2",
      label: "Bike Management",
      icon: <AppstoreOutlined />,
    },
   
    {
      key: "sub4",
      label: "User Management",
      icon: <SettingOutlined />,
      
    },
    {
      key: "sub5",
      label: "Return Bike",
      icon: <SettingOutlined />,
    },
    {
      key: "sub6",
      label: "Home",
      icon: <SettingOutlined />,
    },
  ];
  const MenuItems = () => {
   
  
    const onClick: MenuProps["onClick"] = (e) => {
      console.log("click ", e);
    };
    return (
      <div>
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    );
  };
  
  export default MenuItems;
  