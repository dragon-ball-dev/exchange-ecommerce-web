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

export const useGetCategory = (id) => {
    return useFetch({ url: apiRoutes.admin.category + '/' + id, key: 'getCategory' });
}