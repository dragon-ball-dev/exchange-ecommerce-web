import { Button, Col, Row, Tabs } from 'antd';
import './profilesetting.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import { useEffect } from 'react';
import { clearToken } from '../../../utils/storage';
import config from '../../../config';

const ProfileSettingPage = () => {
    const navigate = useNavigate();
    const { tagFunction } = useParams();
    const onChange = (v) => {
        if (v === 'logout') return;
        navigate(`/settings/profile/${v}`);
    };
    const onLogout = () => {
        clearToken();
        window.location.href = config.routes.web.login;
    };

    return (
        <div className="container w-1/2 mx-auto my-[5rem] profile-setting-container">
            <Row>
                <Col span={6}>
                    <p className="text-[4rem] ml-[1rem] font-bold text-black mb-[2rem]">Settings</p>
                    <div className="bg-violet-50 rounded-3xl py-[1.5rem]">
                        <Tabs
                            className="w-full"
                            defaultActiveKey={tagFunction}
                            tabPosition={'left'}
                            onChange={onChange}
                            items={[
                                {
                                    label: `Edit profile`,
                                    key: '',
                                },
                                {
                                    label: `Change password`,
                                    key: 'change-password',
                                },
                                {
                                    label: `Verify your account`,
                                    key: 'verify-account',
                                },
                                {
                                    label: `Change email`,
                                    key: 'change-email',
                                },
                            ]}
                        />
                    </div>
                    <Button onClick={onLogout} className='mt-5 bg-red-500 text-white ml-32 '>Logout</Button>
                </Col>
                <Col span={18}>
                    {!tagFunction && <Profile />}
                    {tagFunction === 'change-password' && <ChangePassword />}
                </Col>
            </Row>
        </div>
    );
};

export default ProfileSettingPage;
