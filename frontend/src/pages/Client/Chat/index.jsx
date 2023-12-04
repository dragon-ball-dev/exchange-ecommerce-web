import { useState } from 'react';
import { useGetUserMessage } from '../../../hooks/api/useChatApi';
import { useGetListTransaction } from '../../../hooks/api/useTransactionApi';
import ChatMessage from './ChatMessage';
import UserChat from './UserChat';

const ChatPage = () => {
    const {data, isLoading} = useGetListTransaction({
        pageNo: 1,
        pageSize: 1000
    });
    const [chosenUserId, setChosenUserId] = useState(0);
    
    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <UserChat data={data} chosenUserId={chosenUserId} setChosenUserId={setChosenUserId}/>
                <ChatMessage />
            </div>
        </div>
    );
};

export default ChatPage;
