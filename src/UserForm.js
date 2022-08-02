import React, { useState } from "react";

const UserForm = () => {
  var [title, setTitle] = useState(" ");

  var handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="user-form">
      <h1>{title}</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button>+</button>
      </form>
    </div>
  );
};

export default UserForm;
