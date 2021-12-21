import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const initialItem = {
  nickname: "",
  species: "",
  image: "",
  h2ofrequency: "",
};

const AddPlant = ()=>{
	const [item, setItem] = useState(initialItem);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/plants`, item)
      .then(resp=> {
				console.log(resp);
      })
      .catch(err=>{
        console.log(err);
      })
  
  };


	return (
		<div>
			<h2>Add your plant!</h2>
			<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={changeHandler}
          placeholder="nickname"
          //value={item.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="species"
          onChange={changeHandler}
          placeholder="species"
          //value={item.price}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
		</div>
	)
}

export default AddPlant;