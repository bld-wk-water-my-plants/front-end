import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const initialItem = {
  plant_nickname: "",
  species_name: "",
  h2o_frequency: "",
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
    const id = localStorage.getItem('user_id')
    axiosWithAuth().post(`/api/auth/plants/${id}`, item)
      .then(resp=> {
				console.log(resp);
      })
      .catch(err=>{
        console.error(err);
      })
  
  };


	return (
		<div>
			<h2>Add your plant!</h2>
			<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="plant_nickname"
          onChange={changeHandler}
          placeholder="Nickname"
          value={item.plant_nickname}
        />
        <div className="baseline" />

        <input
          type="text"
          name="species_name"
          onChange={changeHandler}
          placeholder="Species Name"
          value={item.species_name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="h2o_frequency"
          onChange={changeHandler}
          placeholder="H20 Frequency"
          value={item.h2o_frequency}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
		</div>
	)
}

export default AddPlant;