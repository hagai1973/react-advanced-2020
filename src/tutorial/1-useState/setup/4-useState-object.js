import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({name:'Max', age:25, message:'this is a text'});

  const handleClick = (newAge) => {
    
    setPerson({...person, age:person.age+1, name: person.name+'i', message:person.message+'m'});
  };

  return (
  
  <div>
    <h3>Name: {person.name}</h3>
    <h3>Age: {person.age}</h3>
    <h3>Message: {person.message}</h3>
    
    <button className="btn" onClick={handleClick}>Add Year to Person</button>
  </div>

  );
};

export default UseStateObject;
