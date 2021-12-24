import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const initialItem = {
  username: "",
  password: "",
  phoneNumber: "",
};

  //No backend functionality here yet

const EditUser = ()=>{
	const [item, setItem] = useState(initialItem);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post(`/api/auth/update`, item)
      .then(resp=> {
				console.log(resp);
      })
      .catch(err=>{
        console.log(err);
      })
  };


	return (
		<div className="top">
			<h2 className="edit">Edit Your Account Info!</h2>
			<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="form-box"
          onChange={changeHandler}
          placeholder="Username"
          value={item.nickname}
        />
        <div className="baseline" />

        <input
          type="text"
          name="password"
          className="form-box"
          onChange={changeHandler}
          placeholder="Password"
          value={item.password}
        />
        <div className="baseline" />

        <input
          type="tel"
          name="tel"
          className="form-box"
          onChange={changeHandler}
          placeholder="Phone Number"
          value={item.phoneNumber}
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <div className="baseline" />
				<small>Format: 123-456-7890</small>
				<div className="baseline" />
				<h4>Make sure all fields are filled out before updating!<br/> If you are not changing anything, please input the same information</h4>
        <button className="submitBtn form-button">Update</button>
      </form>
			
		</div>
	)
}

export default EditUser;