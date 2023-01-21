import Navbar from './components/Navbar';
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <Chatbox />}

    </div>
  );
}

export default App;
