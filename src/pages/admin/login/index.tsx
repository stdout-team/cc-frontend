import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();
    const onFinish = (values: any) => {
        router.push("/admin")
    };

    return (
        <Form
            name="normal_login"
            initialValues={{remember: true}}
            onFinish={onFinish}
            style={{
                width: "500px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}
        >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Пожалуйста введите логин'}]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Пожалуйста введите пароль'}]}
            >
                <Input
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
