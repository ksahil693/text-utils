import { useState } from "react";
import "./App.css";
import Alert from "../../text-utils/src/componets/Alert";
import NavBar from "../../text-utils/src/componets/Navbar";
import TextForm from "../../text-utils/src/componets/TextForm";
import About from "../../text-utils/src/componets/About";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";




function App() {

const [mode,setMode] = useState('light');
const [alert,setAlert] = useState(null);

const showAlert=(message,type)=>{

  
  setAlert({
    msg: message,
    type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);

}

const toggleModeDark = () =>{

  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert('Dark mode has been anabled','success');
   
  }else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert('Light mode has been anabled','success');
  }
}
const toggleModeGreen = () =>{

  if(mode==='light'){
    setMode('Green');
    document.body.style.backgroundColor ='#4B8673';
    showAlert('Green mode has been anabled','success');
   
  }else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert('Light mode has been anabled','success');
  }
}
const toggleModePurple = () =>{

  if(mode==='light'){
    setMode('Purple');
    document.body.style.backgroundColor ='#7C3E66';
    showAlert('Dark mode has been anabled','success');
   
  }else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert('Light mode has been anabled','success');
  }
}


  return (
    <>
      
          

        
        {/* <Router> */}
        <NavBar title="TextUtils" mode={mode} toggleModeDark={toggleModeDark} toggleModeGreen={toggleModeGreen} toggleModePurple={toggleModePurple}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter your Text to analyze below" mode={mode}/>
      </div>

      {/* <Routes>
          
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text to analyze below" mode={mode}/>} />
          <Route exact path="/about" element={<About/>} />

        </Routes>
      
       
        </Router> */}

    </>
  );
}

export default App;
