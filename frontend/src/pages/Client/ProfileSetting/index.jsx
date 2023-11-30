import { Col, Row, Tabs } from 'antd';
import './profilesetting.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import ChangePassword from './ChangePassword';

const ProfileSettingPage = () => {
    const navigate = useNavigate();
    const { tagFunction } = useParams();
    const onChange = (v) => {
        navigate(`/settings/profile/${v}`);
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
                                    label: `Verify your account`,
                                    key: 'verify-account',
                                },
                                {
                                    label: `Change password`,
                                    key: 'change-password',
                                },
                                {
                                    label: `Change email`,
                                    key: 'change-email',
                                },
                            ]}
                        />
                    </div>
                </Col>
                <Col span={18}>
                    {!tagFunction && (
                        <Profile />
                    )}
                    {tagFunction === 'change-password' && (
                        <ChangePassword />
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default ProfileSettingPage;
