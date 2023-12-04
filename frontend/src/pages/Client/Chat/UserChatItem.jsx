const UserChatItem = ({ userChat }) => {
    return (
        <div className="bg-indigo-50 flex items-stretch justify-between gap-5 px-5 rounded-sm max-md:justify-center max-md:mb-10">
            <div className="bg-violet-700 flex w-1 shrink-0 h-24 flex-col rounded-sm" />
            <img
                loading="lazy"
                src={userChat.imageUrl}
                className="aspect-square object-contain object-center w-16 justify-center items-center self-center overflow-hidden shrink-0 max-w-full my-auto"
                alt="Message Image"
            />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <h2 className="text-gray-800 text-xl font-bold leading-7 whitespace-nowrap">
                    <a
                        rel="noopener noreferrer"
                    >
                        {userChat.name}
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
