import { useState } from 'react';
import { useGetUserMessage } from '../../../hooks/api/useChatApi';
import { useGetListTransaction } from '../../../hooks/api/useTransactionApi';
import ChatMessage from './ChatMessage';
import UserChat from './UserChat';

const ChatPage = () => {
    const { data, isLoading } = useGetListTransaction({
        pageNo: 1,
        pageSize: 1000,
    });
    
    const [chosenUserChat, setChosenUserChat] = useState(null);

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <UserChat
                    data={data}
                    chosenUserChat={chosenUserChat}
                    setChosenUserChat={setChosenUserChat}
                />
                {chosenUserChat ? (
                    <ChatMessage chosenUserChat={chosenUserChat}/>
                ) : (
                    <div className="items-center w-3/5 p-5 self-stretch flex grow flex-col max-md:max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='w-2/5 mt-32' viewBox="0 0 300 374">
                            <path
                                fill="#AC6BFF"
                                d="M85 212a100 100 0 0 1 200 0v111c0 11-9 20-20 20H105c-11 0-20-9-20-20V212Z"
                            ></path>
                            <rect width="174" height="57.6" x="104" fill="#72D5FF" rx="10"></rect>
                            <path
                                fill="#72D5FF"
                                d="M104 89V34h60c2 0-35 36-57 56-1 2-3 1-3-1Z"
                            ></path>
                            <path
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M258 23H127m90 13h-90"
                            ></path>
                            <rect width="81" height="59" y="72" fill="#D590FF" rx="10"></rect>
                            <path
                                fill="#D590FF"
                                d="M81 147v-45H31c-2 0 29 29 47 47 1 1 3 0 3-2Z"
                            ></path>
                            <path
                                stroke="#fff"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M67 90H15m40 22H15m26-11H15"
                            ></path>
                            <path
                                stroke="#FE5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M160 222v26c0 4 4 6 7 4l18-17-18-16c-3-3-7-1-7 3Zm51 0v26c0 4-4 6-7 4l-19-17 19-16c3-3 7-1 7 3Z"
                            ></path>
                            <path
                                stroke="#5B1DC0"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M217 170a15 15 0 0 1-22 0m-20 0a15 15 0 0 1-22 0m114-66h19l-19 19h19m12-36h14l-14 14h14m12-30h11l-11 11h11"
                            ></path>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatPage;
