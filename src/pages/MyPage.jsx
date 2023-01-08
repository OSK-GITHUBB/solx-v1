import { gapi } from "gapi-script";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
    const location = useLocation()

    const logoutHandle = useCallback(async () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(
            auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL')),
        )
        localStorage.removeItem("user")
        setUser(false)
        navigate(location?.state?.return_url || "/", {
            replace: true
        })
    }, [])

    return <div className="flexDirectionColumn">
        <h2 className="white">Hoş geldin {user?.name}</h2>
        <button style={{ marginLeft: 24 }} onClick={logoutHandle}>Log out</button>
    </div>
}

export default MyPage;