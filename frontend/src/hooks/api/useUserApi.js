import apiRoutes from '../../config/apiRoutes';
import {
    useDelete,
    useDeleteList,
    useFetch,
    usePost,
    usePut,
    usePutForm,
    usePutFormWithoutId,
    usePutWithoutId,
} from '../../utils/reactQuery';

export const useGetMe = () => {
    return useFetch({ url: apiRoutes.common.user.me, key: 'getMe' });
};
