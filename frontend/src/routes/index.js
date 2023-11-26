import config from "../config";
import HomePage from "../pages/Client/Home";
import ClientLayout from '../layouts/Client/ClientLayout'
import AdminLayout from '../layouts/Admin/AdminLayout'
import PostPage from "../pages/Admin/Post";
import UserPage from "../pages/Admin/User";
import AboutPage from "../pages/Client/About";
import ExplorePage from "../pages/Client/Explore";
import ProductDetailPage from "../pages/Client/ProductDetail";
import LoginPage from "../pages/Client/Login";
import RegisterPage from "../pages/Client/Register";
import ChatPage from "../pages/Client/Chat";
import ProfilePage from "../pages/Client/Profile";
import CreatePostPage from "../pages/Client/CreatePost";
import CreateISOPage from "../pages/Client/CreateISO";
import ReportPage from "../pages/Admin/Report";
import TradePage from "../pages/Admin/Trade";
import DashboardPage from "../pages/Admin/Dashboard";
import AutoApprovePage from "../pages/Admin/AutoApprove";
import InformationPage from "../pages/Admin/Information";
import SettingPage from "../pages/Admin/Setting";
import CategoryPage from "../pages/Admin/Category";
import ItemConditionPage from "../pages/Admin/ItemCondition";
import ProfileSettingPage from "../pages/Client/ProfileSetting";


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
    
];
const privateRoutes = [
    {
        path: config.routes.web.chat,
        component: ChatPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.settings,
        component: ProfileSettingPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.settings + '/:tagFunction',
        component: ProfileSettingPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: true,
    },
    {
        path: config.routes.web.profile,
        component: ProfilePage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.web.profile + "/:tag",
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
    {
        path: config.routes.web.create_iso,
        component: CreateISOPage,
        layout: ClientLayout,
        roles: ['USER'],
        private: false,
    },
    {
        path: config.routes.admin.dashboard,
        component: DashboardPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.post,
        component: PostPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.account,
        component: UserPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.report,
        component: ReportPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.trade,
        component: TradePage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.auto,
        component: AutoApprovePage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.info,
        component: InformationPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.setting,
        component: SettingPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.category,
        component: CategoryPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    },
    {
        path: config.routes.admin.condition,
        component: ItemConditionPage,
        layout: AdminLayout,
        roles: ['ADMIN'],
        private: false,
    }
];

const routes = [...publicRoutes, ...privateRoutes];
export default routes;
