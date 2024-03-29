import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/Dashboard';
import NewRequest from './pages/NewRequest';
import HistoryPage from './pages/HistoryPage';

const client_id = '200338719271-juuspjad20frhr0l2g3mce4ovphobrhk.apps.googleusercontent.com';//'659895759042-m6m8f3qik452isp4t160vcilg0mojb1e.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={client_id}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
     {/* <div className="App"> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Dashboard></Dashboard> */}
      <NewRequest></NewRequest>
      {/* <HistoryPage></HistoryPage> */}
    {/* </div> */}
      {/* </LocalizationProvider> */}
    </GoogleOAuthProvider>
  );
}

export default App;
