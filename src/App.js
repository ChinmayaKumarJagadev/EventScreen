import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router";
import axios from "axios";
import { useEffect } from "react";

function App() {


  const checkingAPI1 = () =>{
    axios
    .post(
      "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
    )
    .then((res) => {
      console.log(res);
    });
  }

  const checkingAPI2 = () =>{
    axios
    .post(
      "https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b "
    )
    .then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    checkingAPI1();
    checkingAPI2();
  }, []);


  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
