import { NavLink } from "react-router-dom";
import config from "../../../config";

const RegisterPage = () => {
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
                                Sign up
                            </h1>
                            <section className="items-stretch self-stretch flex flex-col -mr-5 mt-6 max-md:max-w-full">
                                <h2 className="text-gray-800 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                                    Email
                                </h2>
                                <div className="text-gray-500 text-3xl leading-6 tracking-normal whitespace-nowrap bg-violet-50 mt-1 px-3.5 py-4 rounded-2xl max-md:max-w-full">
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full text-3xl bg-violet-50 focus:outline-none"
                                    />
                                </div>
                            </section>
                            <section className="items-stretch self-stretch flex flex-col -mr-5 mt-6 max-md:max-w-full">
                                <h2 className="text-gray-800 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                                    Password
                                </h2>
                                <div className="text-gray-500 text-3xl leading-6 tracking-normal whitespace-nowrap bg-violet-50 mt-1 px-3.5 py-4 rounded-2xl max-md:max-w-full">
                                    <input
                                        type="password"
                                        placeholder="Your password"
                                        className="w-full text-3xl bg-violet-50 focus:outline-none"
                                    />
                                </div>
                            </section>
                            <button className="text-gray-800 text-center text-3xl font-bold leading-[52px] items-center bg-yellow-300 w-1/2 mt-6 px-5 rounded-[52px] self-start max-md:max-w-full">
                                Join now
                            </button>
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
                                <span className="text-gray-800">Already have an account? </span>
                                <NavLink
                                    to={config.routes.web.loading}
                                    className="font-bold text-violet-700"
                                >
                                    Login
                                </NavLink>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default RegisterPage;
