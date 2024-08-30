import React, {  useState } from 'react'
import MyContext from './MyContext'


function MyState (props) {
  // set light mode button 
  const [mode, setMode]= useState('light');

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [loading,setLoading] = useState(false);

  return (
   
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading}}>
        {/* using this data pass from parent to child directly */}
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState