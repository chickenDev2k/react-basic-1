import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res?.data) {
            notification.success({
                message: "create user",
                description: "tao user thanh cong",
            });
            console.log(res);
        }

        // console.log(">>>check state:", { fullName, email, password, phone });
    };
    return (
        <div className="user-form" style={{ margin: "20px " }}>
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(val) => {
                            setFullName(val.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(val) => {
                            setEmail(val.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(val) => {
                            setPassword(val.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(val) => {
                            setPhone(val.target.value);
                        }}
                    />
                </div>
                <div>
                    <Button type="primary" onClick={handleClickBtn}>
                        Create User
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default UserForm;
