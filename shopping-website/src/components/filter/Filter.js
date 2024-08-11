import React, { useContext } from 'react'
import './Filter.css';
import myContext from '../context/MyContext';
import { FaSearch } from 'react-icons/fa';

const Filter = () => {
    const context = useContext(myContext);
    const{mode} = context;
  return (
    <div className='filter' style={{color:mode==='dark' ? 'white':'' ,border : mode==='dark' ? '1px solid white' : '', backgroundColor: mode==='dark'? '#282c34':''}}>
        {/* searchbar */}
        <div className='search-bar' style={{color:mode==='dark' ? 'white':'' ,backgroundColor:mode==='dark' ? '#404246':''}}>
            <i style={{color:mode==='dark'?'gray':''}}><FaSearch/></i>
            <input 
            placeholder='Search Here'
            />
        </div>
        {/* reset  */}
        <div className='reset-div'>
            <p>Filter</p>
            <button style={{color: mode==='dark'? 'white':''}}>Reset Filter</button>
        </div>

        <div className='select-div'>
        <select
                className="select"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="jacket">Jacket</option>
                <option value="shirt">shirt</option>
                <option value="mobile">mobile</option>
                <option value="jacket">Jacket</option>
              </select>
              <select
                className="select"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
        </div>

    </div>
  )
}

export default Filter