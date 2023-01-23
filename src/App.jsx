
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import ChatWindow from './components/ChatWindow';


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatWindow />}

    </div>
  );
}

export default App;
