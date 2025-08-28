import { Form, notification, Row, Col, Input, Button, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";

const LoginPage = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values);
        //call api
        const res = await loginUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Dang ki user thanh cong ",
            });
            navigate("/login");
        } else {
            notification.error({
                message: "Register User error",
                description: JSON.stringify(res.message),
            });
        }
    };

    return (
        <Row justify={"center"} style={{ margin: "40px auto" }}>
            <Col xs={24} md={18} lg={12}>
                <p style={{ textAlign: "center" }}>Dang nhap</p>
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    <Row justify={"center"}>
                        <Col xs={24} md={8}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "input this field" }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify={"center"}>
                        <Col xs={24} md={8}>
                            <Form.Item label="Password" name="password">
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify={"center"}>
                        <Col xs={12} md={4}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={"/"}>Go to homepage -- </Link>
                        </Col>
                    </Row>
                    <Divider />
                    <Row justify={"center"} style={{ marginTop: "30px" }}>
                        <Col xs={12} md={6}>
                            Chua co tai khoan? <Link to={"/register"}>Dang ki tai day</Link>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginPage;
