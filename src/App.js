import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// let name = "Bro";
function App() {
  const [mode, setmode] = useState("light")  //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)
  const showalert = (message, type)=>{
    setalert({
      msg: message,
      Type: type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)

  }
      
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="rgb(6 12 30)"
      showalert("Dark mode has been enabled.","success")
      document.title = "TextUtils- Dark"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light mode has been enabled.","success")
      document.title = "TextUtils- Light"

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar Title="TextUtils" About="About Us" Contact="Contact Us" mode={mode} togglemode={togglemode} />
      <Alert alert= {alert}/>
      <div className="container">
        {/* <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm showalert={showalert} mode={mode} heading="Write something here..."/>}>
        </Routes> */}
        <TextForm showalert={showalert} mode={mode} heading="Write something here..."/>
      </div>
      {/* <div className="container">
      <About mode={mode}/>
      </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
