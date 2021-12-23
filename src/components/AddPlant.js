import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const initialItem = {
  nickname: "",
  species: "",
  image: "",
  h2ofrequency: "",
};

  //No backend functionality here yet

const AddPlant = ()=>{
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
    axiosWithAuth().post(`api/auth/plants`, item)
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
          value={item.nickname}
        />
        <div className="baseline" />

        <input
          type="text"
          name="species"
          onChange={changeHandler}
          placeholder="species"
          value={item.species}
        />
        <div className="baseline" />

        <input
          type="text"
          name="h2ofrequency"
          onChange={changeHandler}
          placeholder="h2ofrequency"
          value={item.h2ofrequency}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
		</div>
	)
}

export default AddPlant;