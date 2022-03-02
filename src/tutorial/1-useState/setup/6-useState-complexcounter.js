import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(1);
  
  const complex = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 3000);};
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1 style={{color:"blue"}}>{value}</h1>
        <button className="btn" onClick={complex}>
          Increase later
        </button>
       
      </section>
    </>
  );
};
export default UseStateCounter;
