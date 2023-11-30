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

export const useGetListPost = (params) => {
    return useFetch({ url: apiRoutes.web.post, key: 'getListPost', params });
};

export const useCreatePost = (updater) => {
    return usePost(apiRoutes.web.post, updater);
}

export const useGetPost = (id) => {
    return useFetch({ url: `${apiRoutes.web.post}/${id}`, key: 'getPost' });
}

export const useLikePost = (id, updater) => {
    return usePost(`${apiRoutes.web.post}/like/${id}`, updater);
}

export const useDeletePost = (updater) => {
    return useDelete(apiRoutes.web.post, updater);
}
