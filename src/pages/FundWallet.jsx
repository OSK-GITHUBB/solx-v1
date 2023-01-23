import { gapi } from "gapi-script";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FundWallet = () => {
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
    navigate("/my-page")
  }

  const onPress2 = () => {
    navigate("/amount")
  }

  return (
        <div>
            <br/><br/><br/><br/>
            <button style={{ position: "absolute", right: 24, top: 24 }} onClick={logoutHandle}>Log out</button>
            <p>Select a way to fund your account:</p>
            <p>1- Google Pay</p>
            <p>2- Apple Pay</p>
            <p>3- Microsoft Pay</p>
            <p>4- Bank IBAN Transfer</p>
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

export default FundWallet;