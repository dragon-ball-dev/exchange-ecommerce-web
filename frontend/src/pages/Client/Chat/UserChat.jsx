import { useGetUserMessage } from '../../../hooks/api/useChatApi';
import UserChatItem from './UserChatItem';

const UserChat = ({ data, chosenUserChat, setChosenUserChat }) => {
    const onChosenUserChat = (item) => {
        setChosenUserChat(item);
    };

    return (
        <div className="items-stretch w-2/5 self-stretch flex  flex-col pb-12  border-r-opacity-10 border-r border-solid">
            <section className="">
                <header className="bg-white flex w-full flex-col px-5 py-5  border-b-opacity-10 border-b border-solid">
                    <div className="items-center flex w-[118px] max-w-full gap-2.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5abb4af-1121-4cde-9807-0d8cb440fc7b?apiKey=b570640ca9b549a79647f94d6104bae5&"
                            className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
                            alt="Message Icon"
                        />
                        <h1 className="text-gray-800 text-2xl font-bold leading-7 self-stretch whitespace-nowrap">
                            Messages
                        </h1>
                    </div>
                </header>
                <div>
                    {data?.data?.content &&
                        data?.data?.content?.map((item, index) => (
                            <div className='cursor-pointer hover:bg-indigo-50' onClick={() => onChosenUserChat(item)}>
                                <UserChatItem
                                    chosenUserChat={chosenUserChat}
                                    key={index}
                                    userChat={item}
                                />
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default UserChat;
