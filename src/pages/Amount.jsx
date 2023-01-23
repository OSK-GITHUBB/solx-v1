import { gapi } from "gapi-script";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Amount = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
    const location = useLocation()

    const logoutHandle = async() => {
        const auth2 = await gapi.auth2.getAuthInstance();
        auth2.signOut().then(
          auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL')),
          localStorage.removeItem("user"),
          setUser(false),
          navigate(location?.state?.return_url || "/", {
            replace: true
          })
        ).catch = (err) => {
          alert("Error ", err)
        }
      }

    const onPress = () => {
        navigate("/fund-wallet")
    }
    
    const onPress2 = () => {
        navigate("/fund-account")
    }

    return (
        <div>
        <br/><br/><br/><br/>
        <button style={{ position: "absolute", right: 24, top: 24 }} onClick={logoutHandle}>Log out</button>
        <p>Enter an amount (USD):</p>
        <p><input type="text" /></p>
          <div className="center">
            <button onClick={onPress}>Go Back</button>
          </div>
          <br/>
          <div className="center">
            <button onClick={onPress2}>Continue</button>
          </div>
        </div>

    )

}

export default Amount;