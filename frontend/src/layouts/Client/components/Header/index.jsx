import { Link, NavLink } from 'react-router-dom';
import config from '../../../../config';
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { useGetMe } from '../../../../hooks/api/useUserApi';
import { clearToken, isTokenStoraged } from '../../../../utils/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { data, isLoading, refetch } = useGetMe();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (isLoading) return;
        localStorage.setItem('userId', data.id);
        setUser(data);
    }, [isLoading, data]);

    const onLogout = () => {
        clearToken();
        setUser(null);
        window.location.href = config.routes.web.login;
    };

    if(isTokenStoraged()) {
        refetch();
    }

    return (
        <div className="sticky top-0 border-b border-b-gray-200 border-solid z-[1000]">
            <nav className="bg-white  z-[1] flex w-full flex-col items-center px-5 py-8 max-md:max-w-full">
                <div className="justify-between flex w-[1240px] max-w-full gap-5 max-md:flex-wrap max-md:justify-center">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fdfd2b7-d6e4-4639-a36f-c16542ea71fc?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-[1.19] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
                        alt="Logo"
                    />
                    <div className="self-center flex items-stretch justify-between gap-5 my-auto">
                        <div className="text-blue-800 text-3xl font-bold leading-4">
                            <NavLink to={config.routes.web.home}>Home</NavLink>
                        </div>
                        <div className="text-blue-800 text-3xl font-bold leading-4">
                            <NavLink to={config.routes.web.explore}>Explore</NavLink>
                        </div>
                        <div className="text-blue-800 text-3xl font-bold leading-4 whitespace-nowrap">
                            <NavLink to={config.routes.web.about}>Why Bunz</NavLink>
                        </div>
                    </div>
                    {isTokenStoraged() && user ? (
                        <>
                            <div className="justify-end items-center flex gap-0 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                                <Dropdown
                                    className="items-center w-18 shadow-lg bg-yellow-300 self-center flex aspect-square flex-col my-auto p-3 rounded-full"
                                    menu={{
                                        items: [
                                            {
                                                label: (
                                                    <Link
                                                        to={''}
                                                        className="flex items-center gap-[10px] w-48 py-2"
                                                    >
                                                        <div>
                                                            <svg
                                                                fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 42 42"
                                                                width="42"
                                                                height="42"
                                                            >
                                                                <path
                                                                    d="M19.66 8.51H8.5a4 4 0 0 0-4 4V21M22.34 33.49l11.15.01a4 4 0 0 0 4-4v-8.48"
                                                                    stroke="#2C2339"
                                                                    stroke-width="3"
                                                                    fill="none"
                                                                ></path>
                                                                <path
                                                                    d="M26.84 39.33 21 33.49l5.84-5.85M15.16 2.67 21 8.51l-5.84 5.85"
                                                                    stroke="#2C2339"
                                                                    stroke-width="3"
                                                                    fill="none"
                                                                ></path>
                                                                <rect
                                                                    x="3"
                                                                    y="25"
                                                                    width="12"
                                                                    height="12"
                                                                    rx="3"
                                                                    fill="#C0A3FF"
                                                                ></rect>
                                                                <rect
                                                                    x="28"
                                                                    y="5"
                                                                    width="12"
                                                                    height="12"
                                                                    rx="3"
                                                                    fill="#C0A3FF"
                                                                ></rect>
                                                            </svg>
                                                        </div>
                                                        <div className="text-[16px]">Repost</div>
                                                    </Link>
                                                ),
                                                key: 'repost',
                                            },
                                            {
                                                label: (
                                                    <Link
                                                        to={config.routes.web.create_post}
                                                        className="flex items-center gap-[10px] w-48 py-2"
                                                    >
                                                        <div>
                                                            <svg
                                                                fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 42 42"
                                                                width="42"
                                                                height="42"
                                                            >
                                                                <circle
                                                                    cx="21"
                                                                    cy="21"
                                                                    r="18"
                                                                    fill="#FF7575"
                                                                ></circle>
                                                                <path
                                                                    d="M21 12v18M30 21H12"
                                                                    stroke="currentColor"
                                                                    stroke-width="3"
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                        <div className="text-[16px]">Post</div>
                                                    </Link>
                                                ),
                                                key: 'post',
                                            },
                                            {
                                                label: (
                                                    <Link
                                                        to={config.routes.web.create_iso}
                                                        className="flex items-center gap-[10px] w-64 py-2"
                                                    >
                                                        <div>
                                                            <svg
                                                                fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 42 42"
                                                                width="42"
                                                                height="42"
                                                            >
                                                                <g clip-path="url(#IconRadar)">
                                                                    <path
                                                                        d="M8.27 8.27a18 18 0 0 1 25.46 0L21 21 8.27 8.27Z"
                                                                        fill="#83F299"
                                                                    ></path>
                                                                    <path
                                                                        d="M2.53 20.87A18.25 18.25 0 0 1 7.92 7.9a18.42 18.42 0 0 1 13.02-5.37v18.33H2.53Z"
                                                                        fill="#83F299"
                                                                    ></path>
                                                                    <path d="M13.18 7.61a15.43 15.43 0 0 1 17.67 1.42l-3.56 3.56A10.5 10.5 0 1 0 31.5 21h-3a7.5 7.5 0 1 1-3.36-6.25l-5.18 5.18A1.5 1.5 0 0 0 21 22.5c.41 0 .79-.17 1.06-.44L37.5 6.62a18.68 18.68 0 0 0-2.12-2.12l-2.4 2.4A18.43 18.43 0 0 0 21 2.5c-3.75 0-7.23 1.11-10.15 3.03a5.52 5.52 0 0 1 2.33 2.08Z"></path>
                                                                    <path d="M6.46 15.61c-1-.4-1.84-1.07-2.45-1.94A18.5 18.5 0 1 0 39.5 21h-3.01a15.5 15.5 0 1 1-30.04-5.39ZM8.5 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="IconRadar">
                                                                        <path
                                                                            fill="#fff"
                                                                            d="M0 0h42v42H0z"
                                                                        ></path>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className="text-[16px]">ISO</div>
                                                    </Link>
                                                ),
                                                key: 'iso',
                                            },
                                        ],
                                    }}
                                    trigger={['click']}
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1703fb7-86fd-4140-b37f-d80e1bed9e8a?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-square cursor-pointer object-contain object-center w-14 overflow-hidden"
                                        alt=""
                                    />
                                </Dropdown>

                                <NavLink to={config.routes.web.profile}>
                                    <img
                                        loading="lazy"
                                        src={
                                            user?.imageUrl ||
                                            'https://cdn.builder.io/api/v1/image/assets/TEMP/caadde44-cb3c-4613-b64c-c35d038822e3?apiKey=b570640ca9b549a79647f94d6104bae5&'
                                        }
                                        className="aspect-[1.33] object-contain object-center w-20 mx-4 justify-center overflow-hidden shrink-0 max-w-full"
                                        alt=""
                                    />
                                </NavLink>
                                <Link to={config.routes.web.settings} className="flex items-center cursor-pointer">
                                    <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:-mr-2">
                                        <div className="text-gray-800 text-3xl font-bold leading-6 whitespace-nowrap">
                                            {user?.name}
                                        </div>
                                        <div className=" bg-yellow-300 w-12 mt-1.5 py-2 rounded">
                                            <div className="gap-0 flex justify-center">
                                                <p className="text-gray-800 text-lg font-bold leading-4 tracking-tight">
                                                    0$
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a47523-6131-4ac2-a93a-7010c2d9db38?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-[0.95] object-contain object-center w-[52px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                                        alt=""
                                    />
                                </Link>
                                <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:justify-center">
                                    <NavLink to={config.routes.web.chat}>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0055ef54-0531-441d-bb73-24e34b305590?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                            className="aspect-square object-contain object-center w-26 overflow-hidden shrink-0 max-w-full"
                                            alt=""
                                        />
                                    </NavLink>
                                    <NavLink>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/914cd29f-ebb0-462f-9b60-31100703b6fd?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                            className="aspect-square object-contain object-center w-26 overflow-hidden shrink-0 max-w-full"
                                            alt=""
                                        />
                                    </NavLink>
                                    <NavLink>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9d20ef-eff7-4587-9944-509ea96c47cc?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                            className="aspect-square object-contain object-center w-26 overflow-hidden shrink-0 max-w-full"
                                            alt=""
                                        />
                                    </NavLink>
                                    <div className='text-[2rem] cursor-pointer flex justify-center items-center gap-[1rem] text-indigo-500' onClick={onLogout}>
                                        <FontAwesomeIcon icon={faSignOut} />
                                        <p>Logout</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                            <div className="text-black text-2xl hover:text-indigo-400 font-bold leading-4 self-center my-auto">
                                <NavLink to={config.routes.web.login}>Login</NavLink>
                            </div>
                            <div className="text-black text-2xl hover:text-indigo-400 font-bold self-center my-auto">
                                <NavLink to={config.routes.web.register}>Join now</NavLink>
                            </div>
                            <div className="items-stretch flex justify-between gap-3.5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/817e38cb-af47-47de-b6c2-01ecd66c28e8?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                    className="aspect-[3.85] object-contain object-center w-[154px] justify-center items-center border overflow-hidden shrink-0 max-w-full rounded-3xl border-solid border-black"
                                    alt="Image 1"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4f581fd-c972-4d5a-9c4a-8092abd4aef9?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                    className="aspect-[3.38] object-contain object-center w-[135px] justify-center items-center border overflow-hidden shrink-0 max-w-full rounded-3xl border-solid border-black"
                                    alt="Image 2"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
