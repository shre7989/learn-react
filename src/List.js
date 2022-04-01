import React from "react";
import Api from "./Api";
function List({ data }) {
  return (
    <div>
      <ul>
        {data.map((el, idx) => (
          <Api key={idx} data={el} />
        ))}
      </ul>
    </div>
  );
}

export default List;
