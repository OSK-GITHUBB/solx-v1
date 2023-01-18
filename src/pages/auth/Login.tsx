import React, { useCallback, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useLocation, useNavigate } from "react-router-dom";
import { clientId } from "../../config/google-auth";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
            navigate(location?.state?.return_url || "/my-page", {
                replace: true
            })
        }
    }, [user])

    const onSuccess = useCallback((res) => {
        setUser({
            id: res.profileObj?.googleId,
            email: res.profileObj?.email,
            name: res.profileObj?.givenName
        });
        console.log("Login success! Current user: ", res.profileObj)

        navigate(location?.state?.return_url || "/my-page", {
            replace: true
        })
    }, [])

    const onFailure = useCallback((res) => {
        console.log("Login failed! res: ", res)
    }, [])

    return <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
        />
    </div>
}

export default Login;