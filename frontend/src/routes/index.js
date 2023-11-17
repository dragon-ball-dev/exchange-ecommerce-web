import config from "../config";
import HomePage from "../pages/Client/Home";
import ClientLayout from '../layouts/Client/ClientLayout'
import AboutPage from "../pages/Client/About";
import ExplorePage from "../pages/Client/Explore";
import ProductDetailPage from "../pages/Client/ProductDetail";
import LoginPage from "../pages/Client/Login";
import RegisterPage from "../pages/Client/Register";
import ChatPage from "../pages/Client/Chat";
import ProfilePage from "../pages/Client/Profile";
import CreatePostPage from "../pages/Client/CreatePost";


const publicRoutes = [
    {
        path: config.routes.web.home,
        component: HomePage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.about,
        component: AboutPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.explore,
        component: ExplorePage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.product_detail,
        component: ProductDetailPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.login,
        component: LoginPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.register,
        component: RegisterPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.chat,
        component: ChatPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.profile,
        component: ProfilePage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.create_post,
        component: CreatePostPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
];
const privateRoutes = [];

const routes = [...publicRoutes, ...privateRoutes];
export default routes;
