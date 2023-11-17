const CreatePostPage = () => {
    return (
        <div className="container max-w-[1280px] mx-auto mt-10">
            <div className="justify-center items-stretch flex flex-col">
                <div className="w-full max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch px-5 max-md:mt-3">
                                <div className="text-gray-800 text-4xl font-black leading-10 whitespace-nowrap -mr-5">
                                    Create a new post
                                </div>
                                <div className="flex flex-col items-stretch -mr-5 mt-8 pt-12 pb-8 px-16 rounded-2xl border-4 border-dashed border-indigo-50 max-md:px-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4940060c-ab68-4013-817d-f659bf7de638?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-[1.31] object-contain object-center w-[84px] overflow-hidden self-center max-w-full mt-5"
                                    />
                                    <div className="items-center bg-violet-700 self-center flex w-full flex-col mt-16 px-5 rounded-[36px] max-md:mt-10">
                                        <div className="justify-center items-center flex gap-2">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0993f3-9b47-4158-8e9e-7cfae16e2e83?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                            />
                                            <div className="text-white text-center text-sm font-bold leading-9 self-stretch">
                                                Add photos
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-center text-sm font-bold leading-4 mt-4">
                                        Add photos manually or just
                                        <br />
                                        drag and drop them here
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch mt-20 px-5 max-md:max-w-full max-md:mt-10">
                                <div className="justify-between items-stretch flex gap-5 -mr-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-gray-800 text-xl font-bold leading-7">
                                        Title
                                    </div>
                                    <div className="text-gray-500 text-sm font-bold leading-5 whitespace-nowrap self-start">
                                        0/64
                                    </div>
                                </div>
                                <div className="items-stretch flex flex-col -mr-5 mt-1 max-md:max-w-full">
                                    <input
                                        placeholder="Enter title"
                                        className="text-gray-500 focus-within:outline-none text-xl leading-6 tracking-normal whitespace-nowrap bg-violet-50 px-3.5 py-4 rounded-2xl max-md:max-w-full"
                                    />
                                </div>
                                <div className="text-gray-800 text-xl font-bold leading-7 whitespace-nowrap -mr-5 mt-6 max-md:max-w-full">
                                    Description
                                </div>
                                <div className="items-stretch flex flex-col -mr-5 mt-1 max-md:max-w-full">
                                    <textarea
                                        placeholder="Describe your item or write a public message"
                                        className="text-gray-500 text-xl leading-7 tracking-normal whitespace-nowrap bg-violet-50 pt-4 pb-28 px-3.5 rounded-2xl max-md:max-w-full max-md:pb-10"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[498px] max-w-full flex-col mt-6 px-5 self-end">
                    <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba89b8e9-5040-402a-8f96-3c2bfd63fddb?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Meeting Spot
                            </div>
                        </div>
                        <div className="text-violet-700 text-center text-xl font-bold leading-[52px] self-stretch">
                            Select
                        </div>
                    </div>
                    <div className="max-w-[443px] text-gray-800 text-base leading-6 self-stretch -mr-5 mt-1.5 px-5 border-l-2 border-l-rose-500 border-solid max-md:max-w-full">
                        You don’t have any meeting spots yet. Add at least one meeting
                        <br />
                        spot, and your post will see people around.
                    </div>
                    <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a8e813-aecc-4947-9c84-1a26128afaf3?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Category
                            </div>
                        </div>
                        <div className="text-violet-700 text-center text-xl font-bold leading-[52px] self-stretch">
                            Select
                        </div>
                    </div>
                    <div className="items-center self-center flex w-full justify-between gap-5 mt-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-stretch gap-2.5 my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2fd0a4a-b8d7-49be-bc7e-696b4397e0d0?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-gray-800 text-xl leading-6 whitespace-nowrap">
                                Item condition
                            </div>
                        </div>
                        <div className="text-violet-700 text-center text-xl font-bold leading-[52px] self-stretch">
                            Select
                        </div>
                    </div>
                    <div className="justify-end items-stretch flex w-[376px] max-w-full gap-4 -mr-5 mt-12 self-end max-md:mt-10">
                        <div className="text-gray-800 cursor-pointer text-center text-xl font-bold leading-[52px] items-center bg-violet-50 grow px-5 rounded-[52px]">
                            Cancel
                        </div>
                        <div className="text-stone-300 cursor-pointer text-center text-xl font-bold leading-[52px] items-center bg-amber-100 grow px-5 rounded-[52px]">
                            Post
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreatePostPage;
