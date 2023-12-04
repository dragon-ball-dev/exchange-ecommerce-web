import apiRoutes from '../../config/apiRoutes';
import {
    useDelete,
    useDeleteList,
    useFetch,
    usePost,
    usePut,
    usePostQuery,
    usePutForm,
    usePutFormWithoutId,
    usePutWithoutId,
    usePostForm,
} from '../../utils/reactQuery';

export const useGetUserMessage = () => {
    return useFetch({ url: apiRoutes.web.user_message, key: 'getUserMessage' });
};

export const useGetUserMessageChat = (id) => {
    return useFetch({ url: apiRoutes.web.user_message_chat + '/' + id, key: 'getUserMessageChat' });
};