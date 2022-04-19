import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'



function App() {
  const handleDark=()=>{
    if(mode==='light'){
      setMode('dark');
      setEdDark('Disable Dark Mode')

      document.body.style.backgroundColor='#000000';
    }
    else{
      setMode('light');
         document.body.style.backgroundColor='white';
         setEdDark('Enable Dark Mode')
    }
  }
  const [mode,setMode]=useState('light')
  const [edDark,setEdDark]=useState('Enable Dark Mode')
  return (
<div>
<Navbar title={'Text-Util'} about='About Us' mode={mode} handleDark={handleDark} xyz={edDark}/>
<Alert/>
<TextForm heading='Enter your text below' mode={mode}/>
</div>
  );
}

export default App;
