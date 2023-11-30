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

export const useGetListPost = (params) => {
    return useFetch({ url: apiRoutes.web.post, key: 'getListPost', params });
};

export const useCreatePost = (updater) => {
    return usePost(apiRoutes.web.post, updater);
};

export const useUpdatePost = (updater) => {
    return usePut(apiRoutes.web.post, updater);
};

export const useGetPost = (id) => {
    return useFetch({ url: `${apiRoutes.web.post}/${id}`, key: 'getPost' });
};

export const useGetUserPost = (params) => {
    return useFetch({ url: `${apiRoutes.web.post}/user`, key: 'getUserPost', params });
};

export const useGetUserLikePost = (params) => {
    return useFetch({ url: `${apiRoutes.web.post}/user/like`, key: 'getUserPost', params });
};

export const useLikePost = (id, updater) => {
    return usePost(`${apiRoutes.web.post}/like/${id}`, updater);
};

export const useUnLikePost = (updater) => {
    return usePostWithId(`${apiRoutes.web.post}/like`, updater);
};

export const useDeletePost = (updater) => {
    return useDelete(apiRoutes.web.post, updater);
};
