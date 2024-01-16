// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import About from './Components/About.js'
import Alert from './Components/Alert.js';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  function showAlert(message, type){
      setAlert({
        message : message,
        type : type
      });
      setTimeout(()=>{
        setAlert(null);
      }, 2000)
  }
  
  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      console.log("set to dark mode");
      document.querySelector('body').style.backgroundColor = '#0f0f0f';

      showAlert("Dark mode has been enabled", "success");
      
      // you can use the below code to set dark mode to entire document as bootstrap now supports dark mode using data-bs-theme attribute
      // but here it is implemented manually as an exercise
      // let element = document.querySelector('html');
      // element.setAttribute("data-bs-theme","dark");
    }
    else{
      setMode("light");
      console.log("set to light mode");
      document.querySelector('body').style.backgroundColor = 'white';

      showAlert("Light mode has been enabled", "success");

      // bootstrap also will support different color modes soon
      // let element = document.querySelector('html');
      // element.setAttribute("data-bs-theme","light");
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextCraft" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
          <Route exact path="/About" element={<About functions="Convert to Uppercase, Convert to Lowercase" mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to manipulate!" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
