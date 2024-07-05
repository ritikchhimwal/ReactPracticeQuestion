//show the data of array by map method
import React from "react";

const Itemlist = () => {
  const object = ["Item1","Item2","Item3","Item4","Item5"];
  return (
    <div>
      <ul>
        {object.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Itemlist;
