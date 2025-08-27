import { Button, Form, Input } from "antd";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <div style={{ padding: "40px" }}>
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Phone Number" name="phone">
                    <Input />
                </Form.Item>

                <Form.Item label="">
                    <Button type="primary" htmlType="submit" onClick={() => {}}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterPage;
