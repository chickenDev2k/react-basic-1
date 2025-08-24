import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await fetchAllUserAPI();

        setDataUser(res.data.result);
    };
    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser} loadUser={loadUser} />
        </div>
    );
};
export default UserPage;
