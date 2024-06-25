import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };


  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>

      <button className="btn btn-success btn-md me-1 mb-2" onClick={addElement}>Add Element</button>

      <ul className="list-unstyled">
        {array.map((item, index) => (
          <li key={index} className="d-flex align-items-center  border p-2">
            <span className="fw-bold me-3" style={{ fontSize: '1.5rem' }}>{item}</span>
            <button onClick={() => deleteElement(index)}
                    id="wd-delete-element-click"
                    className="btn btn-danger btn-md ms-auto">
              Delete</button>
          </li>
        ))}
      </ul>

      <hr/>
    </div>
  );
}
