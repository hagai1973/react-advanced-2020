import React, { useState } from 'react';

const UseStateBasics = () => {
//   console.log(useState('hi'));
//   const value = useState(1)[0];
//   const handler = useState(1)[1];
// console.log(value, handler)
const [text,setText] = useState(100);
const handleClick = () =>{
  if (text===100){
    setText(getRandomInt(9));
   }
   else{
    setText(100);
   }
};


const getRandomInt =(max)=> {
  return Math.floor(Math.random() * max);
};


  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>ChangeTitle</button>
    </React.Fragment>
    );
};

export default UseStateBasics;
