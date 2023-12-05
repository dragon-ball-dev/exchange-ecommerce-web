import { useGetUserMessageChat } from '../../../hooks/api/useChatApi';
import { useEffect, useRef, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import Message from './Mesage';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Button, DatePicker, Select, notification } from 'antd';
import {
    useGetDateTransaction,
    useGetTransaction,
    useScheduleDateTransaction,
    useUpdateStatusTransaction,
} from '../../../hooks/api/useTransactionApi';
import MessageContainer from './MessageContainer';

var stompClient = null;

const ChatMessage = ({ chosenUserChat }) => {
    let loginUserId = parseInt(localStorage.getItem('userId'));
    const { data, isLoading, refetch } = useGetUserMessageChat(
        (chosenUserChat?.post1?.userId?.id || chosenUserChat?.post1?.userId) === loginUserId
            ? chosenUserChat?.user2?.id || chosenUserChat?.user2
            : chosenUserChat?.post1?.userId?.id || chosenUserChat?.post1?.userId,
    );
    const { data: dataTransaction, refetch: refetchTransaction } = useGetTransaction(
        chosenUserChat.id,
    );
    const mutateUpdateStatus = useUpdateStatusTransaction({
        success: () => {
            notification.success({
                message: 'Success',
                description: 'Update status successfully',
            });
            refetchTransaction();
            if (transactionStatus === 'CANCELED') {
                onSendMessage('Không muốn giao dịch nữa');
            }
            else if (transactionStatus === 'COMPLETED') {
                onSendMessage('Giao dịch thành công, chúc mừng cả 2');
            }
        },
        error: () => {
            notification.error({
                message: 'Error',
                description: 'Update status failed',
            });
        },
    });

    const [scheduleDate, setScheduleDate] = useState('');
    const [transactionStatus, setTransactionStatus] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if(!dataTransaction?.data) return;

        setTransactionStatus(dataTransaction?.data?.transactionStatus?.name)
    }, [dataTransaction]);
    
    const mudateSchedule = useScheduleDateTransaction({
        success: () => {
            notification.success({
                message: 'Success',
                description: 'Schedule successfully',
            });
            refetchTransaction();
            onSendMessage(`Đã đặt lịch hẹn vào ${new Date(scheduleDate).toLocaleString()}`);
        },
        error: () => {
            notification.error({
                message: 'Error',
                description: 'Schedule failed',
            });
        },
    });

    useEffect(() => {
        connect();
        // scrollToBottom();
    }, []);

    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        stompClient.subscribe('/topic/messages', onMessageReceived);
    };

    const onMessageReceived = (payload) => {
        refetch();
    };
    const onError = (err) => {
        console.log(err);
    };

    const onSendMessage = (value) => {
        if (!text && !value) return;
        if (stompClient) {
            var chatMessage = {
                id: 1,
                content: text || value,
                sentAt: new Date(),
                read: false,
                sendBy: false,
            };

            setText('');
            // scrollToBottom();
            const newId = loginUserId == data?.sender?.id ? data.receiver?.id : data.sender?.id;

            const destination = `/app/user/message-chat/${loginUserId}/${newId}`;
            stompClient.send(destination, {}, JSON.stringify(chatMessage));
        }
    };

    const onDateChange = (value, dateString) => {
        setScheduleDate(dateString);
    };

    const onSetDate = async () => {
        if (!scheduleDate) return;
        await mudateSchedule.mutateAsync({
            id: chosenUserChat?.id,
            body: {
                dateTimeExchange: new Date(scheduleDate).toISOString(),
            },
        });
    };

    const onChangeStatus = (value) => {
        setTransactionStatus(value);
    };

    const onSetStatus = async () => {
        await mutateUpdateStatus.mutateAsync({
            id: chosenUserChat?.id,
            body: {
                newStatus: transactionStatus,
            },
        });
    };

    return (
        <main className="items-center w-3/5 self-stretch flex grow flex-col max-md:max-w-full">
            <header className="items-stretch self-stretch shadow-sm bg-white flex flex-col pt-2.5 pb-1 px-5 py-3 max-md:max-w-full">
                <nav className="items-stretch flex py-4 max-w-full justify-between gap-5 mx-4 max-md:flex-wrap max-md:mr-2.5">
                    <div className="justify-between items-stretch flex gap-4">
                        <img
                            loading="lazy"
                            src={
                                loginUserId == data?.sender?.id
                                    ? data?.receiver?.imageUrl
                                    : data?.sender?.imageUrl
                            }
                            className="aspect-square object-contain object-center w-[4rem] rounded-full justify-center items-center overflow-hidden shrink-0 max-w-full"
                            alt="Profile Image"
                        />
                        <h1 className="text-gray-800 text-[2rem] font-bold  self-center whitespace-nowrap my-auto">
                            <a>
                                {loginUserId == data?.sender?.id
                                    ? data?.receiver?.name
                                    : data?.sender?.name}
                            </a>
                        </h1>
                    </div>
                    {
                        <Button className="bg-green-500">
                            Status: {dataTransaction?.data?.transactionStatus?.name}
                        </Button>
                    }
                    {dataTransaction?.data?.date && (
                        <Button className="bg-red-400">
                            Schedule: {new Date(dataTransaction?.data?.date).toLocaleString()}
                        </Button>
                    )}
                    <div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22073c7e-0dd0-44d0-a29e-e70f720381d3?apiKey=b570640ca9b549a79647f94d6104bae5&"
                            className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            alt="Logo"
                        />
                    </div>
                </nav>
            </header>
            <section className="items-stretch h-[50rem] overflow-y-scroll w-[668px] max-w-full gap-3 pl-4 pr-20 py-3.5 rounded-2xl max-md:flex-wrap max-md:mt-10 max-md:pr-5">
                <div className="bg-violet-50 flex gap-3 p-5 rounded-2xl mb-[2rem]">
                    <img
                        loading="lazy"
                        src={chosenUserChat?.post1?.image}
                        className="aspect-square object-contain object-center w-14 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        alt="Product Image"
                    />
                    <h2 className="text-gray-800 text-2xl font-bold  self-center whitespace-nowrap my-auto">
                        {chosenUserChat?.post1?.title}
                    </h2>
                </div>
                <MessageContainer data={data} />
            </section>
            <div className="items-stretch self-stretch shadow-sm bg-white flex flex-col px-5 py-8 max-md:max-w-full">
                <div className="items-stretch flex justify-between gap-4 mx-3 pr-1.5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                    <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                        <div className="bg-violet-50 flex flex-col items-stretch px-3.5 py-2.5 rounded-2xl max-md:max-w-full">
                            <div className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:-mr-1">
                                <input
                                    placeholder="Write a message"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            onSendMessage();
                                        }
                                    }}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    className="text-gray-500 w-full text-3xl bg-violet-50 focus-within:outline-none tracking-normal my-auto"
                                />
                                <div
                                    onClick={onSendMessage}
                                    className="max-w-[36px] justify-center items-center bg-violet-400 self-stretch flex aspect-square flex-col p-1.5 rounded-[36px]"
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4dacd29-a936-4254-aa2c-a9b10513b338?apiKey=b570640ca9b549a79647f94d6104bae5&"
                                        className="aspect-square object-contain object-center w-full overflow-hidden"
                                        alt="Send Icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-stretch self-center flex gap-4 my-auto max-md:justify-center">
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9274d-4739-4372-b0bf-ba7134c4215f?apiKey=b570640ca9b549a79647f94d6104bae5&"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            alt="Image 1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87b1295a-4f87-4013-b995-440c840e0a70?apiKey=b570640ca9b549a79647f94d6104bae5&"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            alt="Image 2"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71117461-8dde-4603-860d-9b2e94efa0e6?apiKey=b570640ca9b549a79647f94d6104bae5&"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            alt="Image 3"
                        /> */}
                    </div>
                </div>
                {dataTransaction?.data?.post1?.userId?.id === loginUserId ? (
                    <>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-[1.6rem]">Schedule:</span>
                            <DatePicker
                                showTime
                                onChange={onDateChange}
                                className="w-[30%]"
                            />
                            <Button onClick={onSetDate}>Set</Button>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-[1.6rem]">Status:</span>
                            <Select
                                onChange={onChangeStatus}
                                value={transactionStatus}
                                className="w-[20%]"
                            >
                                <Select.Option value="NEGOTIATING">NEGOTIATING</Select.Option>
                                <Select.Option value="COMPLETED">COMPLETED</Select.Option>
                                <Select.Option value="CANCELED">CANCELED</Select.Option>
                            </Select>
                            <Button onClick={onSetStatus}>Set</Button>
                        </div>
                    </>
                ) : (
                    dataTransaction?.data?.transactionStatus?.name === 'NEGOTIATING' && (
                        <>
                            <div className="mt-5">
                                <Button
                                    onClick={() => {
                                        setTransactionStatus('CANCELED');
                                        onSetStatus();
                                    }}
                                    className="bg-red-400"
                                >
                                    Cancelled
                                </Button>
                            </div>
                        </>
                    )
                )}
            </div>
        </main>
    );
};
export default ChatMessage;
