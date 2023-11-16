const UserInfo = () => {
    return (
        <section className="flex w-[574px] max-w-full flex-col items-stretch mt-6 self-end">
            <header className="justify-between flex w-full gap-5 pb-1.5 px-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-gray-500 text-2xl font-bold leading-6">
                    <span className="font-bold text-gray-800">39m</span>
                    <span className=" text-gray-500"> ago</span>
                </div>
                <div className="items-stretch flex gap-3.5 mt-1.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1a64c6-4784-4261-b435-a3724a338464?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        alt=""
                    />
                    <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap">
                        0
                    </div>
                </div>
            </header>
            <div className="items-stretch flex w-[188px] max-w-full flex-col mt-4 px-5 self-start">
                <div className="text-gray-800 text-2xl font-bold leading-6 whitespace-nowrap -mr-5">
                    Trade by
                </div>
                <div className="justify-between items-stretch flex gap-2 -mr-5 mt-2">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4e27c28-93a1-4508-a8ac-e6c3918b1a75?apiKey=b570640ca9b549a79647f94d6104bae5&"
                        className="aspect-square object-contain object-center w-[74px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                        alt=""
                    />
                    <div className="text-gray-800 text-xl font-bold leading-7 self-center whitespace-nowrap my-auto">
                        <a
                            href="https://bunz.com/profile/JenTo91"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jen McLean
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default UserInfo;
