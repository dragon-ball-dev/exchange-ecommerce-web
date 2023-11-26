import { NavLink, useParams } from 'react-router-dom';
import config from '../../../config';
import { useGetMe } from '../../../hooks/api/useUserApi';

const ProfilePage = () => {
    const { tag } = useParams();
    const { data } = useGetMe();

    return (
        <div>
            <div className="flex flex-col relative">
                <div className="items-stretch bg-transparent flex flex-col w-full relative">
                    <img
                        loading="lazy"
                        src={
                            data?.imageUrl ||
                            'https://cdn.builder.io/api/v1/image/assets/TEMP/839fc428-8dce-45d4-868e-215646302f97?apiKey=b570640ca9b549a79647f94d6104bae5&'
                        }
                        className="aspect-[3.42] object-contain object-center w-full justify-center items-center overflow-hidden max-md:max-w-full"
                    />
                    <div className="items-center absolute -bottom-[15rem] border border-solid self-center mb-[20px] shadow-sm bg-white z-[1] flex mt-0 w-[1028px] max-w-full flex-col pb-4 rounded-2xl">
                        <div className="w-[948px] max-w-full">
                            <div className="gap-5 py-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0 rounded-full">
                                    <div className="items-stretch flex flex-col justify-center w-[150px] h-[150px] mx-auto pb-1.5 px-1.5 rounded-full border-[6px] border-solid border-white max-md:mt-8">
                                        <div className="text-gray-500 text-center flex justify-center items-center text-7xl w-[150px] h-[150px]  bg-indigo-50 rounded-full ">
                                            <span>M</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
                                        <div className="flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="items-stretch flex grow basis-[0%] flex-col mt-6">
                                                <div className="text-gray-800 text-3xl font-bold whitespace-nowrap">
                                                    {data?.name}
                                                </div>
                                                <div className="text-gray-500 text-3xl font-bold whitespace-nowrap">
                                                    @{data?.email}
                                                </div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd895ee-fa9a-4eda-8d95-d288975e2bb0?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                className="aspect-[0.71] object-contain object-center w-11 justify-between items-center overflow-hidden shrink-0 max-w-full self-start"
                                            />
                                        </div>
                                        <div className="items-stretch flex w-full justify-between gap-5 mt-4 pr-3 py-2 max-md:max-w-full max-md:flex-wrap">
                                            <div className="items-stretch flex justify-between gap-2.5">
                                                <div className="items-stretch bg-violet-50 flex grow basis-[0%] flex-col pl-3 pr-11 py-3 rounded-2xl max-md:pr-5">
                                                    <div className="items-stretch flex justify-between gap-1.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95aaa88a-d6ec-44db-9cb3-9ce812fdfb61?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-black text-xl font-bold self-center whitespace-nowrap my-auto">
                                                            Meeting spots
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-500 text-xl font-bold whitespace-nowrap">
                                                        Not selected
                                                    </div>
                                                </div>
                                                <div className="items-stretch bg-violet-50 flex grow basis-[0%] flex-col pl-3 pr-20 py-3 rounded-2xl max-md:pr-5">
                                                    <div className="items-stretch flex justify-between gap-1.5">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9b82cb-c4e5-4512-b45c-774ef8ebecef?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-black text-xl font-bold self-center whitespace-nowrap my-auto">
                                                            Interests
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-500 text-xl font-bold whitespace-nowrap">
                                                        Not selected
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:justify-center">
                                                <div className="items-stretch flex gap-0.5 py-px max-md:justify-center">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5121d364-50c5-46d0-a636-f2a0a7dcafa2?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                        className="aspect-[0.53] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                                                    />
                                                    <div className="items-center flex grow basis-[0%] flex-col">
                                                        <div className="text-gray-800 text-center text-2xl font-bold whitespace-nowrap">
                                                            0
                                                        </div>
                                                        <div className="text-gray-500 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                                                            trades
                                                        </div>
                                                    </div>
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a30f6a-5348-4e17-83af-d5cafaa30c44?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                        className="aspect-[0.53] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                                                    />
                                                </div>
                                                <div className="items-center flex grow basis-[0%] flex-col">
                                                    <div className="text-black text-center text-2xl font-bold whitespace-nowrap">
                                                        0
                                                    </div>
                                                    <div className="text-gray-500 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                                                        followers
                                                    </div>
                                                </div>
                                                <div className="items-center flex grow basis-[0%] flex-col">
                                                    <div className="text-black text-center text-2xl font-bold whitespace-nowrap">
                                                        0
                                                    </div>
                                                    <div className="text-gray-500 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                                                        following
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex shrink-0 h-px flex-col mt-8 border-t-indigo-50 border-x-indigo-50 border-t border-solid border-r border-l max-md:max-w-full" />
                        <div className="justify-between items-stretch flex gap-[5rem] max-w-full my-4 mx-7 self-start max-md:ml-2.5">
                            <NavLink
                                to={config.routes.web.profile}
                                className={`${
                                    !tag ? 'bg-indigo-600 text-white' : 'text-gray-800'
                                } text-2xl font-bold whitespace-nowrap items-stretch  px-7 py-4 rounded-[50px]`}
                            >
                                Posts
                            </NavLink>
                            <NavLink
                                to={config.routes.web.profile + '/iso'}
                                className={`${
                                    tag === 'iso' ? 'bg-indigo-600 text-white' : 'text-gray-800'
                                } cursor-pointer text-2xl font-bold self-center whitespace-nowrap px-7 py-4 rounded-[50px]`}
                            >
                                ISOs
                            </NavLink>
                            <NavLink
                                to={config.routes.web.profile + '/liked'}
                                className={`${
                                    tag === 'liked' ? 'bg-indigo-600 text-white' : 'text-gray-800'
                                } cursor-pointer text-2xl font-bold self-center whitespace-nowrap px-7 py-4 rounded-[50px]`}
                            >
                                Liked
                            </NavLink>
                            <NavLink
                                to={config.routes.web.profile + '/reviews'}
                                className={`${
                                    tag === 'reviews' ? 'bg-indigo-600 text-white' : 'text-gray-800'
                                } cursor-pointer text-2xl font-bold self-center whitespace-nowrap px-7 py-4 rounded-[50px]`}
                            >
                                Reviews
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="items-center my-[15rem] border border-solid mb-[50px] self-center shadow-sm bg-white z-[1] flex w-[1028px] max-w-full flex-col pb-4 rounded-2xl">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51538f39-2915-45bb-9d2a-45fd66b804cb?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-[2] object-contain object-center w-[400px] overflow-hidden self-center max-w-full mt-24 max-md:mt-10"
                    />
                    <div className="text-gray-800 text-3xl font-bold leading-6 self-center whitespace-nowrap mt-9">
                        Minh Sơn Nguyễn doesn’t have any posts yet
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
