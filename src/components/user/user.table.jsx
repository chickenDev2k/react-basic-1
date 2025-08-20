import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
const UserTable = ({ dataUser, columns, loadUser }) => {
    console.log(">>> run render 000");

    return <Table columns={columns} dataSource={dataUser} rowKey="_id" />;
};

export default UserTable;
