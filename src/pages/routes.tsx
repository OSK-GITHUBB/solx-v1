import About from "./About";
import Home from "./Home";
import MyPage from "./MyPage";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import Page404 from "./404";
import PrivateRoute from "./PrivateRoute";
import FundWallet from "./FundWallet"

const routes: Array<object> = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/my-page",
        element: <MyPage />,
        auth: true
    },
    {
        path: "/fund-wallet",
        element: <FundWallet />,
        auth: true
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                element: <Login />
            }
        ]
    },
    {
        path: "*",
        element: <Page404 />
    }
]

const authMap = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route?.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes);