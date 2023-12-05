const Message = ({ sender, contentItem, receiver }) => {
    let loginUserId = parseInt(localStorage.getItem('userId'));
    const isSentByCurrentUser =
        loginUserId == sender.id
            ? contentItem.sendBy
                ? false
                : true
            : contentItem.sendBy
            ? true
            : false;

    let image = loginUserId == receiver.id ? sender?.imageUrl : receiver?.imageUrl;
    return (
        <div className={`flex ${isSentByCurrentUser && 'justify-end'}`}>
            <div
                className={`bg-violet-50 flex p-3 gap-3 my-2 w-fit rounded-xl ${
                    isSentByCurrentUser ? 'pl-10 bg-green-300' : 'pr-10'
                }`}
            >
                {!isSentByCurrentUser && (
                    <img
                        loading="lazy"
                        src={image}
                        className="aspect-square object-contain object-center w-14 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        alt="User Image"
                    />
                )}
                <h2 className="text-gray-800 text-2xl self-start whitespace-nowrap my-auto">
                    {contentItem?.content}
                </h2>
            </div>
        </div>
    );
};

export default Message;
