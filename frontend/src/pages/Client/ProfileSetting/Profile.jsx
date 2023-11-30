import { Button, Col, Form, Input, Row, notification } from "antd";
import UploadAvatar from "./UploadAvatar";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { useGetMe, useUpdateUser } from "../../../hooks/api/useUserApi";


function Profile() {
    const { data, isLoading, refetch } = useGetMe();
    const [avatar, setAvatar] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const mutateUpdateUser = useUpdateUser({
        success: () => {
            notification.success({
                message: 'Update information successfully',
            });
            setAvatar(null)
        },
        error: (e) => {
            notification.error({
                message: 'Update information failed',
            });
            // setAvatar(null)
        },
    });
    useEffect(() => {
        if (isLoading || !data) {
            refetch();
            return;
        }
        form.setFieldsValue({
            email: data.email,
            name: data.name,
            phone: data.phone,
            address: data.address,
        });
        setImageUrl(data.imageUrl);
    }, [data, isLoading]);

    const onUpdateUser = async () => {
        await mutateUpdateUser.mutateAsync({
            file: avatar,
            name: form.getFieldValue('name'),
            address: form.getFieldValue('address'),
            phone: form.getFieldValue('phone'),
        });
    }

    const [form] = Form.useForm();
    return (
        <>
            <p className="text-[3rem] mt-[2rem] ml-[5rem] font-medium text-gray-400 mb-[2rem]">
                Edit Profile
            </p>
            <Row>
                <Col span={8}>
                    <UploadAvatar
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        setAvatar={setAvatar}
                    />
                </Col>
                <Col span={16}>
                    <Form
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                        onFinish={onUpdateUser}
                    >
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">Email</div>
                            <FormItem name={'email'}>
                                <Input disabled={true} />
                            </FormItem>
                        </div>
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">Name</div>
                            <FormItem
                                name={'name'}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </FormItem>
                        </div>
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">Phone</div>
                            <FormItem
                                name={'phone'}
                                rules={[
                                ]}
                            >
                                <Input />
                            </FormItem>
                        </div>
                        <div>
                            <div className="mb-[1rem] text-[1.6rem] font-medium">Address</div>
                            <FormItem
                                name={'address'}
                                rules={[
                                ]}
                            >
                                <Input.TextArea rows={4} />
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
        </>
    );
}
export default Profile;