import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getCurrentAdmin, getCurrentUser } from "./services/fetch/ApiUtils";
import { ACCESS_TOKEN } from "./constants/Connect";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import Login from './pages/user/Login';
import Main from "./pages/user/Main";
import Shop from './pages/user/Shop';
import ShopDetails from './pages/user/ShopDetails';
import AboutUs from './pages/user/AboutUs';
import Contacts from './pages/user/Contacts';
import Blog from './pages/user/Blog';
import ShoppingCart from './pages/user/ShoppingCart';
import BlogDetails from './pages/user/BlogDetails';
import Signup from './pages/user/SignUp';
import CheckOut from './pages/user/CheckOut';
import LoginAdmin from './pages/admin/Login';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import ForgotPassword from './common/ForgotPassword';
import ResetPassword from './common/ResetPassword';
import SuccessConfirmed from './common/SuccessConfirmed';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response);
        setUsername(response.name);
        setRole(response.roles[0].name);
        setAuthenticated(true);
        setLoading(false);
        console.log(response);
        console.log({ authenticated, username, currentUser, role, loading });
      })
      .catch(error => {
        setLoading(false);
      });
  }

  const loadCurrentlyLoggedInAdmin = () => {
    getCurrentAdmin()
      .then(response => {
        setCurrentUser(response);
        setUsername(response.name);
        setRole(response.roles[0].name);
        setAuthenticated(true);
        setLoading(false);
        console.log({ authenticated, username, currentUser, role, loading });
      })
      .catch(error => {
        setLoading(false);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
    toast.success("Bạn đăng xuất thành công!!!");
  }

  const exitLogoutChangePassword = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setAuthenticated(false);
    setCurrentUser(null);
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser();
    loadCurrentlyLoggedInAdmin();
  }, []);


  console.log({ authenticated, username, currentUser, role, loading });

  return (
    <>
      <Router>
        <Routes>
          {/* USER */}
          <Route exact path="/" element={<Main authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/shop" element={<Shop authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/shop-details/:id" element={<ShopDetails authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/contact" element={<Contacts authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/shopping-cart" element={<ShoppingCart authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/blog" element={<Blog authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/blog-details/:id" element={<BlogDetails authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/check-out" element={<CheckOut authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/about-us" element={<AboutUs authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route exact path="/login" element={<Login authenticated={authenticated} />} />
          <Route exact path="/signup" element={<Signup authenticated={authenticated} />} />
          <Route path="*" exact={true} element={<NotFound />} />
          <Route exact path="/forgot-password" element={<ForgotPassword authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
          <Route exact path="/reset-password/:email" element={<ResetPassword />} />
          <Route exact path="/success-comfirmed/:email" element={<SuccessConfirmed />} />
          {/* ADMIN */}
          <Route exact path="/admin/login" element={<LoginAdmin authenticated={authenticated} />} />
          <Route exact path="/admin/dashboard" element={<DashboardAdmin authenticated={authenticated} currentUser={currentUser} onLogout={handleLogout} />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;