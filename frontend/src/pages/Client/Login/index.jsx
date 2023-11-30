import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useState } from 'react';
import { Form, Input, notification } from 'antd';
import { useLogin } from '../../../hooks/api/useAuthApi';

import {saveToken, getRoles, isTokenStoraged} from '../../../utils/storage';
import FormItem from 'antd/es/form/FormItem';

const LoginPage = () => {
    const [processing, setProcessing] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleToken = (token) => {
        saveToken(token);
        let roles = getRoles();
        let url = '/';

        if (roles?.includes('ADMIN')) url = config.routes.admin.dashboard;
        notification.success({
            message: 'Đăng nhập thành công',
            description: 'Chào mừng bạn đến với hệ thống của chúng tôi',
        });
        navigate(url);
    };

    const mutationLogin = useLogin({
        success: (data) => {
            handleToken(data);
        },
        error: (err) => {
            console.log(err)
            let description = 'Không thể đăng nhập, vui lòng liên hệ Quản trị viên';
            let detail = err?.response?.data?.message;
            if (detail) {
                description = detail;
            }
            notification.error({
                message: 'Đăng nhập thất bại',
                description,
            });
            
        },
        mutate: (data) => {
            setProcessing(true);
        },
        settled: (data) => {
            setProcessing(false);
        },
    });
    const onLogin = async () => {
        await mutationLogin.mutateAsync({
            email: form.getFieldValue('email'),
            password: form.getFieldValue('password'),
        });
    };

    if (isTokenStoraged()) {
        // let roles = getRoles();
        let url = config.routes.web.home;

        // if (roles?.includes('ADMIN')) url = config.routes.admin.dashboard;

        return <Navigate to={url} replace />;
    }

    return (
        <div>
            <main className="bg-white">
                <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <section className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                        <section className="bg-violet-600 flex grow flex-col w-full mx-auto px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b02f6e1-340a-42b4-b4a1-ec3d707dbbf6?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-[0.79] object-contain object-center w-[418px] overflow-hidden max-w-full mr-4 mt-28 max-md:mr-2.5 max-md:mt-10"
                                alt="Community Image"
                            />
                            <div className=" text-white text-center text-[4rem] font-black mr-8 mt-16 mb-32 max-md:mr-2.5 max-md:my-10">
                                Build your community. <br /> Barter.
                            </div>
                        </section>
                    </section>
                    <section className="flex flex-col items-stretch w-1/2 ml-20">
                        <section className="w-1/2 items-start self-stretch flex flex-col my-auto px-5 max-md:mt-10">
                            <h1 className="text-gray-800 text-[4rem] font-black leading-10 self-stretch whitespace-nowrap -mr-5 max-md:max-w-full">
                                Login
                            </h1>
                            <Form className="w-full" form={form} onFinish={onLogin}>
                                <section className="items-stretch self-stretch flex flex-col max-md:max-w-full">
                                    <h2 className="text-gray-800 text-2xl font-bold  whitespace-nowrap max-md:max-w-full">
                                        Email
                                    </h2>
                                    <FormItem
                                        name={'email'}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                            {
                                                type: 'email',
                                            },
                                        ]}
                                    >
                                        <div className="text-gray-500 tracking-normal whitespace-nowrap mt-1 px-3.5 py-4 rounded-2xl max-md:max-w-full">
                                            <Input className="w-full text-[1.6rem] border border-solid " />
                                        </div>
                                    </FormItem>
                                </section>
                                <section className="items-stretch self-stretch flex flex-col -mr-5 max-md:max-w-full">
                                    <h2 className="text-gray-800 text-2xl font-bold  whitespace-nowrap max-md:max-w-full">
                                        Password
                                    </h2>

                                    <FormItem
                                        name={'password'}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <div className="text-gray-500 tracking-normal whitespace-nowrap mt-1 px-3.5 py-4 rounded-2xl max-md:max-w-full">
                                            <Input.Password className="w-full text-[1.6rem] border border-solid " />
                                        </div>
                                    </FormItem>
                                </section>
                                <button
                                    type="submit"
                                    className="text-gray-800 text-center text-3xl font-bold leading-[52px] items-center bg-yellow-300 w-1/2 mt-6 px-5 rounded-[52px] self-start max-md:max-w-full"
                                >
                                    Login
                                </button>
                            </Form>
                            <div className="text-gray-500 text-2xl font-bold leading-6 self-stretch whitespace-nowrap -mr-5 mt-14 max-md:max-w-full max-md:mt-10">
                                or continue with
                            </div>
                            <div className="items-stretch justify-between self-stretch flex w-full gap-5 -mr-5 mt-6 pr-0.5 max-md:max-w-full max-md:flex-wrap">
                                <div className="justify-between items-stretch flex gap-4">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40d88194-facf-4283-ad30-d20bf98fa756?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-square object-contain object-center w-[72px] max-w-full justify-center items-center overflow-hidden shrink-0"
                                        alt="Google Logo"
                                    />
                                    <div className="text-gray-800 text-xl font-bold leading-7 self-center whitespace-nowrap my-auto">
                                        Google
                                    </div>
                                </div>
                                <div className="justify-between items-stretch flex gap-4">
                                    <div className="max-w-[72px] justify-center items-center bg-violet-50 flex aspect-square flex-col p-5 rounded-[72px]">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dddbfb9f-d83b-4c08-962e-2dd142c2602e?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                            className="aspect-square object-contain object-center w-full overflow-hidden"
                                            alt="Facebook Logo"
                                        />
                                    </div>
                                    <div className="text-gray-800 text-xl font-bold leading-7 self-center whitespace-nowrap my-auto">
                                        Facebook
                                    </div>
                                </div>
                            </div>
                            <div className="text-violet-700 text-2xl leading-7 self-stretch whitespace-nowrap -mr-5 mt-24 max-md:max-w-full max-md:mt-10">
                                <span className="text-gray-800">Don’t have an account? </span>
                                <NavLink
                                    to={config.routes.web.register}
                                    className="font-bold text-violet-700"
                                >
                                    Sign up
                                </NavLink>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default LoginPage;
