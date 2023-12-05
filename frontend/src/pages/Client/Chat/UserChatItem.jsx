const UserChatItem = ({ userChat, chosenUserChat }) => {
    return (
        <div
            className={`${
                chosenUserChat && chosenUserChat?.post1?.userId?.id === userChat?.post1?.userId?.id && 'bg-indigo-50'
            } my-3 flex items-stretch justify-between gap-5 px-5  py-3 transition-all rounded-sm max-md:justify-center max-md:mb-10`}
        >
            <div
                className={`${
                    chosenUserChat && chosenUserChat?.post1?.userId?.id === userChat?.post1?.userId?.id &&
                    'bg-violet-700'
                } flex w-1 shrink-0 h-24 flex-col rounded-sm`}
            />
            <img
                loading="lazy"
                src={userChat?.post1?.image}
                className="aspect-square object-contain object-center w-16 justify-center items-center self-center overflow-hidden shrink-0 max-w-full my-auto"
                alt="Message Image"
            />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <h2 className="text-gray-800 text-3xl font-bold whitespace-nowrap">
                    <a rel="noopener noreferrer">{userChat?.post1?.userId?.name}</a>
                </h2>
                <p className="text-gray-500 text-xl font-bold leading-6 whitespace-nowrap">
                    <a
                        rel="noopener noreferrer"
                    >
                        {userChat?.post1?.title}
                    </a>
                </p>
            </div>
        </div>
    );
};
export default UserChatItem;
