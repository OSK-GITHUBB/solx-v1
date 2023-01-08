import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './pages/routes';
import { useEffect } from 'react';
import { gapi } from "gapi-script";
import { clientId } from './config/google-auth';

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth2", start);
  }, [])

  return (
    useRoutes(routes)
  );
}

export default App;