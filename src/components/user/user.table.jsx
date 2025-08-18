import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
const UserTable = () => {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        console.log(">>>run effect 111");
        loadUser();
    }, []);
    const columns = [
        {
            title: "Id",
            dataIndex: "_id",
        },
        {
            title: "Full Name",
            dataIndex: "fullName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI();

        setDataUser(res.data);
    };

    console.log(">>> run render 000");
    return <Table columns={columns} dataSource={dataUser} rowKey="_id" />;
};

export default UserTable;
