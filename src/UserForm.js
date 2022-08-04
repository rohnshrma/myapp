import React, { useState } from "react";

const UserForm = () => {

  // var car = ["a","b","c"]
  // var vehicles = [...car , "x","y","z"]

  // console.log(vehicles , "<= vehicles ");

  var [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  var handleFname = (event) => {
    setFullName((prevValue) => {
      return {
        ...prevValue,
        fName: event.target.value
      };
    });
    console.log(fullName);

    //   setFullName({
    //     fName: event.target.value,
    //     lName: ""
    //   });
  };
  var handleLname = (event) => {
    setFullName((prevValue) => {
      return {
        ...prevValue,
        lName: event.target.value
      };
    });

    console.log(fullName);
  };

  return (
    <div className="user-form">
      {/* <h1>
        {fullName.fName}
        {fullName.lName}
      </h1> */}
      <h2>{fullName.email}</h2>
      <form>
        <input type="text" name="fName" onChange={handleFname} />
        <input type="text" name="lName" onChange={handleLname} />
        {/* <input type="email" name="email" onChange={handleLname} /> */}
        <button>+</button>
      </form>
    </div>
  );
};

export default UserForm;






