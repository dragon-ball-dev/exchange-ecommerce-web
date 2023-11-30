import { Button, Col, Form, Input, Row, notification } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useChangePassword } from '../../../hooks/api/useUserApi';

function ChangePassword() {
    const [form] = Form.useForm();
    const mutateChangePassword = useChangePassword({
        success: (data) => {
            form.resetFields();
            notification.success({
                message: 'Change password successfully',
                description: data?.message,
            });
        },
        error: (e) => {
            notification.error({
                message: 'Change password failed',
                description: e?.response?.data?.message,
            });
        },
    });
    const onChangePassword = async () => {
        await mutateChangePassword.mutateAsync({
            oldPassword: form.getFieldValue('password'),
            newPassword: form.getFieldValue('newPassword'),
            confirmPassword: form.getFieldValue('confirmPassword'),
        });
    };

    return (
        <div className="w-full mx-[8rem]">
            <p className="text-[3rem] mt-[2rem] ml-[5rem] font-medium text-gray-400 mb-[2rem]">
                Change Password
            </p>
            <Row>
                <Col span={16}>
                    <Form
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                        onFinish={onChangePassword}
                    >
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">Password</div>
                            <FormItem name={'password'}>
                                <Input.Password />
                            </FormItem>
                        </div>
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">New Password</div>
                            <FormItem
                                name={'newPassword'}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.Password />
                            </FormItem>
                        </div>
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">
                                Confirm Password
                            </div>
                            <FormItem
                                name={'confirmPassword'}
                                rules={[
                                    {
                                        required: true,
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error('Confirm password does not match'),
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </FormItem>
                        </div>
                        <Button
                            htmlType="submit"
                            className="bg-yellow-400 rounded-[3rem] w-48 h-20 text-[1.8rem]"
                        >
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default ChangePassword;
