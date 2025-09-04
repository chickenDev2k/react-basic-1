import { Link, NavLink } from "react-router-dom";
// import "./header.css";
import { Menu } from "antd";
import {
    AliwangwangOutlined,
    AppstoreAddOutlined,
    AppstoreOutlined,
    BookOutlined,
    HomeOutlined,
    LoginOutlined,
    MailOutlined,
    ReadOutlined,
    SettingOutlined,
    UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(">>>Check user", user);
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
            icon: <BookOutlined />,
        },

        ...(!user.id
            ? [
                  {
                      label: <Link to={"/login"}>Đăng nhập</Link>,
                      key: "login",
                      icon: <LoginOutlined />,
                  },
              ]
            : []),
        ...(user.id
            ? [
                  {
                      label: `Welcome ${user.fullName}`,
                      key: "setting",
                      icon: <AliwangwangOutlined />,
                      children: [
                          {
                              label: "Đăng xuất",
                              key: "logout",
                          },
                      ],
                  },
              ]
            : []),
    ];

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;
