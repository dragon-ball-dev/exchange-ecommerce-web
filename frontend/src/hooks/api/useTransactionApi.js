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

export const useGetDateTransaction = (id) => {
    return useFetch({ url: apiRoutes.web.transaction + '/getDate/' + id, key: 'getDateTransaction' });
};

export const useGetTransaction = (id) => {
    return useFetch({ url: apiRoutes.web.transaction + '/' + id, key: 'getTransaction' });
};

export const useUpdateStatusTransaction = (updater) => {
    return usePut(apiRoutes.web.transaction + '/updateStatus', updater);
}

export const useScheduleDateTransaction = (updater) => {
    return usePut(apiRoutes.web.transaction + '/setDate', updater);
}