import logo from './logo.svg';
import './App.css';
import Internetdata from "./components/Internetdata"
import Domains from "./components/Domains"
import Attackvolume from "./components/Attackvolume"

function App() {
 return (
    <div>
        <Internetdata />
        <Domains />
        <Attackvolume />
    </div>
  );
}

export default App;
