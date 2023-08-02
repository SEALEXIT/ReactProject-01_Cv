import React, { useState } from 'react';

function Namer() {
  const [inputValue, setInputValue] = useState('');
  const [visible, changeVisibility] = useState(true)

  const handleChange = (event) => {
    console.log(event.target)
    setInputValue(prevValue => {
      return prevValue = event.target.value
    });
  };

 const updater = () => changeVisibility(!visible)

  const handleClear = () => {
    setInputValue('');
    // Or you can set 'inputValue' to an empty string directly without modifying the DOM
  };

  return (
    <div className='cont-name'>
      <h1 id="display-name" value ="Name . initial">{inputValue}</h1>
      <div className="cont-cont-name">
         <button className='btn btn-update-name' onClick={updater}>Update</button>
      <>
        { visible ? (<>
        <input className='name-textbox' id="namer" type="text" value={inputValue} onChange={handleChange}/>
         <button className = 'btn btn-clear' onClick={handleClear}>Clear</button>
      </>) 
      : null}
      </>
      </div>
     
    </div>
  );
}

export default Namer;
