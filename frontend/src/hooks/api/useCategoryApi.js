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
} from '../../utils/reactQuery';

export const useCreateCategory = (updater) => {
    return usePost(apiRoutes.admin.category, updater);
};

export const useUpdateCategory = (updater) => {
    return usePut(apiRoutes.admin.category, updater);
};

export const useGetCategory = (id) => {
    return useFetch({ url: apiRoutes.admin.category + '/' + id, key: 'getCategory' });
}

export const useGetListCategory = (params) => {
    return useFetch({ url: apiRoutes.admin.category, key: 'getListCategory', params });
}

export const useDeleteCategory = (updater) => {
    return useDelete(apiRoutes.admin.category, updater);
}