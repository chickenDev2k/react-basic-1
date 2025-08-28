import { Link, NavLink } from "react-router-dom";
// import "./header.css";
import { Menu } from "antd";
import {
    AppstoreAddOutlined,
    AppstoreOutlined,
    HomeOutlined,
    MailOutlined,
    ReadOutlined,
    SettingOutlined,
    UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
    const [current, setCurrent] = useState("");
    const onClick = (e) => {
        "click ", e;
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: "users",
            icon: <UsergroupDeleteOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: "books",
            icon: <ReadOutlined />,
        },
        {
            label: "Setting",
            key: "setting",
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Login</Link>,
                    key: "books",
                    icon: <ReadOutlined />,
                },
                {
                    label: <Link to={"/logout"}>Logout</Link>,
                    key: "books",
                    icon: <ReadOutlined />,
                },
            ],
        },
    ];
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;
