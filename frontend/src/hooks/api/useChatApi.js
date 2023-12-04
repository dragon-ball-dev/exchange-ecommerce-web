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

export const useGetUserMessage = (id) => {
    return useFetch({ url: apiRoutes.web.user_chat + '/' + id, key: 'getUserChat' });
};