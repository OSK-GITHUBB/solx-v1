import { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import { useLocation, useNavigate } from 'react-router-dom';
import { clientId } from '../config/google-auth';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

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
    }, [user])

    const onFailure = useCallback((res) => {
        console.log("Login failed! res: ", res)
    }, [user])

    return <div className="container">
        <img className="logo" src={require('../assets/images/logo.png')} alt="solx-logo" />
        <div className="fieldContent">
            <h1 className="h1 text">Exchange running on Solana.</h1>
            <p className="pg text">Bringing easy self-custody and Solana liqudity to mass market.</p>
            <span className="center container">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                />
            </span>
        </div>
    </div>
}

export default Home;