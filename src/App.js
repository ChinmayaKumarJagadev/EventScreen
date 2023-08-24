import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from './router'

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
