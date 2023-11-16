const UserChatItem = () => {
    return (
        <div className="bg-indigo-50 flex items-stretch justify-between gap-5 px-5 rounded-sm max-md:justify-center max-md:mb-10">
            <div className="bg-violet-700 flex w-1 shrink-0 h-24 flex-col rounded-sm" />
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/827a1e43-597f-46d6-893a-bf812af128a7?apiKey=b570640ca9b549a79647f94d6104bae5&"
                className="aspect-square object-contain object-center w-16 justify-center items-center self-center overflow-hidden shrink-0 max-w-full my-auto"
                alt="Message Image"
            />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <h2 className="text-gray-800 text-xl font-bold leading-7 whitespace-nowrap">
                    <a
                        href="https://bunz.com/chats/85223"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tessa
                    </a>
                </h2>
                <p className="text-gray-500 text-xl font-bold leading-6 whitespace-nowrap">
                    <a
                        href="https://bunz.com/chats/85223"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        500ml metal water bottle bpa free
                    </a>
                </p>
            </div>
        </div>
    );
};
export default UserChatItem;
