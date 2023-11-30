const apiRoutes = {
    common: {
        auth: {
        login: '/auth/login',
        register: '/auth/signup',
        changePassword: '/auth/change-password',
        confirmed: '/auth/confirmed',
    },
    user: {
        me: '/user/me'
    },},
    admin: {
        category: '/category',
    },
    web: {
        user: '/auth/upload-profile',
        post: '/post',
    },
};

export default apiRoutes;
