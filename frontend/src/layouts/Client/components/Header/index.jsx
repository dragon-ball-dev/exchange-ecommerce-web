import { NavLink } from 'react-router-dom';
import config from '../../../../config';
import { useState } from 'react';

const Header = () => {
    const [auth, setAuth] = useState(true);
    return (
        <div className="sticky z-10 top-0 border-b border-b-gray-200 border-solid">
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
                    {auth ? (
                        <>
                            <div className="justify-end items-center flex gap-0 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                                <NavLink
                                    to={config.routes.web.create_post}
                                    className="items-center shadow-lg bg-yellow-300 self-center flex aspect-square flex-col my-auto p-2.5 rounded-3xl"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1703fb7-86fd-4140-b37f-d80e1bed9e8a?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-square object-contain object-center w-10 overflow-hidden"
                                        alt=""
                                    />
                                </NavLink>

                                <NavLink to={config.routes.web.profile}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/caadde44-cb3c-4613-b64c-c35d038822e3?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-[1.33] object-contain object-center w-20 mx-4 justify-center overflow-hidden shrink-0 max-w-full"
                                        alt=""
                                    />
                                </NavLink>
                                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:-mr-2">
                                    <div className="text-gray-800 text-3xl font-bold leading-6 whitespace-nowrap">
                                        Minh Sơn Nguyễn
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
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                            <div className="text-black text-2xl font-bold leading-4 self-center my-auto">
                                <NavLink to={config.routes.web.login}>Login</NavLink>
                            </div>
                            <div className="text-black text-2xl font-bold leading-4 self-center my-auto">
                                <NavLink to={config.routes.web.register}>Join</NavLink>
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
