import { useEffect, useRef } from "react";
import Message from "./Mesage";

const MessageContainer = ({ data }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [data]);

    return (
        <div className="">
            {data?.content?.map((item, index) => {
                return (
                    <Message
                        contentItem={item}
                        sender={data?.sender}
                        key={item.id}
                        receiver={data?.receiver}
                    />
                );
            })}
            <div ref={messagesEndRef}></div>
        </div>
    );
};

export default MessageContainer;