const apiRoutes = {
    common: {
        auth: {
        login: '/auth/login',
        register: '/auth/signup',
        changePassword: '/auth/change-password',
    },
    user: {
        me: '/user/me'
    },},
    admin: {},
    web: {
        user: '/auth/upload-profile',
        post: '/post',
    },
};

export default apiRoutes;
