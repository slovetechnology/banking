import Signup from "forms/Signup";
import Home from "./general/Home";
import Dashboard from "./user/Dashboard";
import Notfound from "general/Nofound";
import Login from "forms/Login";
import ForgotPassword from "forms/ForgotPassword";
import VerifyEmailAccount from "forms/VerifyEmail";
import ChangePassword from "forms/ChangePassword";




export const FormRoutes = [
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/verify-email', component: VerifyEmailAccount },
    { path: '/change-password', component: ChangePassword },
]

export const GeneralRoutes = [
    { path: '', component: Home },
    { path: '*', component: Notfound },
]


export const UserRoutes = [
    { path: '', component: Dashboard },
]