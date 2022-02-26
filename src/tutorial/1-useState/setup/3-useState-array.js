import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  const removeItme = (id) => {
    console.log("Goint to remvoe item " + id);
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItme(id)}>
              Remove Item
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={handleClick}>
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
