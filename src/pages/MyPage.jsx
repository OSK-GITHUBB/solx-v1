import { gapi } from "gapi-script";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Web3 from '@solana/web3.js'
import { saveAs } from 'file-saver';

const MyPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
  const location = useLocation()

  //These may be unsafe for wallet creation practices? Research more.  
  const [publicKey, setPublicKey] = useState('');
  const [secretKey, setSecretKey] = useState('');

  async function createWallet() {
    const newKeypair = await Web3.Keypair.generate()

    //log & set public key
    console.log(newKeypair.publicKey.toString())
    setPublicKey(newKeypair.publicKey.toString())

    //log & set secret key
    console.log(newKeypair.secretKey.toString())
    setSecretKey(newKeypair.secretKey.toString())
  }

  const createWalletHandler = () => {
    createWallet()
  }

  async function secretDownloadHandler() {
    // Create a Blob with the secret key as the content and a .txt file type
    const secretKeyBlob = new Blob(["PublicAddress: ", publicKey.toString(), " Key: ", secretKey.toString()], { type: 'text/plain;charset=utf-8' });

    // Create a file name for the secret key file
    const secretKeyFileName = 'secret-key.txt';

    // Prompt the user to download the secret key file
    saveAs(secretKeyBlob, secretKeyFileName);
  }

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

  const onPress = () => {
    navigate("/fund-wallet")
  }

  return <div className="flexDirectionColumn">
    <h2 className="white">Hoş geldin {user?.name}</h2>
    <button style={{ position: "absolute", right: 24, top: 24 }} onClick={logoutHandle}>Log out</button>
    <div className="center">
      <body>
        <p>
          Click to create a wallet for your account:
        </p>
        <div className="center">
          <button onClick={createWalletHandler} >Create a new wallet</button>
        </div>
        <br />
        {
          publicKey !== '' && (
            <>
              <p>Wallet Created:</p>
              <p>Public Key: {publicKey}</p>
              <p>Private Key: <button onClick={secretDownloadHandler} >Click to download</button> <button>Click to upload to cloud--Coming Soon</button> </p>
              <div className="center">
                <button onClick={onPress}> Next {"> > >"} </button>
              </div>
            </>
          )
        }
      </body>
    </div>
  </div>
}

export default MyPage;