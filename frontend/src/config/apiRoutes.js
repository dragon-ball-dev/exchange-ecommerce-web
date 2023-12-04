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
        },
    },
    admin: {
        category: '/category',
    },
    web: {
        user: '/auth/upload-profile',
        post: '/post',
        user_message: '/user/message',
        user_message_chat: '/user/message-chat',
        transaction: '/transaction',
    },
};

export default apiRoutes;
