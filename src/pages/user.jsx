import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
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
    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser} columns={columns} />
        </div>
    );
};
export default UserPage;
