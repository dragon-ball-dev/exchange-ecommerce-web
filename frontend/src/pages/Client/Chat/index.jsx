import ChatMessage from './ChatMessage';
import UserChat from './UserChat';

const ChatPage = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <UserChat />
                <ChatMessage />
            </div>
        </div>
    );
};

export default ChatPage;
