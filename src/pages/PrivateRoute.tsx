import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
    children?: ReactElement
}

const PrivateRoute = (props: Props) => {
    const { user } = useAuth()
    const location = useLocation()

    if (!user) {
        return <Navigate to="/"
            state={{
                return_url: location?.pathname
            }}
        />
    }
    return props?.children
}

export default PrivateRoute;