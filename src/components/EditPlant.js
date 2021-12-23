import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const initialItem = {
    plant_nickname: "",
    species_name: "",
    image: "",
    h2o_frequency: "",
  };

  //No backend functionality here yet
  
const EditPlant = ()=>{
	const [item, setItem] = useState(initialItem);
	const { id } = useParams();

	useEffect(()=> {
    axiosWithAuth().get(`api/auth/plants/${id}`)
      .then(resp=> {
        setItem(resp.data);
      })
  }, []);

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
    axiosWithAuth().put(`api/auth/plants/${id}`, item)
      .then(resp=> {
				console.log(resp);
      })
      .catch(err=>{
        console.log(err);
      })
  
  };


	return (
		<div>
			<h2>Edit your Plant!</h2>
			<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={changeHandler}
          placeholder="Nickname"
          value={item.plant_nickname}
        />
        <div className="baseline" />

        <input
          type="text"
          name="species"
          onChange={changeHandler}
          placeholder="Species"
          value={item.species_name}
        />
        <div className="baseline" />

				<input
          type="text"
          name="h2ofrequency"
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

export default EditPlant;

