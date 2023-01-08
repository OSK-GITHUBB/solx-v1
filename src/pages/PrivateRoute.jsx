import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    const location = useLocation()

    if (!user) {
        return <Navigate to="/"
            state={{
                return_url: location?.pathname
            }}
        />
    }
    return children
}

export default PrivateRoute;