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
    usePostWithId,
} from '../../utils/reactQuery';

export const useCreateTransaction = (updater) => {
    return usePost(apiRoutes.web.transaction, updater);
};

export const useGetListTransaction = (params) => {
    return useFetch({ url: apiRoutes.web.transaction, key: 'getListTransaction', params });
};
