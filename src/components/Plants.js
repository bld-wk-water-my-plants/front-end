import React, { useState, useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';
import AddPlant from "./AddPlant";
import EditPlant from "./EditPlant";
import { Link, Route } from "react-router-dom";

export default function Plants(props) {

    const { values, update } = props
    const [data, setData] = useState([])
    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    useEffect(() => {
        const getData = () => {
            const id = localStorage.getItem('user_id');
            axiosWithAuth().get(`/api/plants/${id}`)
                .then(res => {
                    setData(res.data);
                    console.log(res.data)
                })
                .catch(err => {
                    console.error('Server Error', err)
                })
        }
        getData();
    }, [])

    return (
        <section>
            <div className="tools">
                <div className="dropDown">
                    <select value="" name="filter" onChange={onChange}>
                        <option value="">-- Filter --</option>
                        <option value="typeA">typeA</option>
                        <option value="typeB">typeB</option>
                        <option value="typeC">typeC</option>
                    </select>

                    <select value="" name="sort" onChange={onChange}>
                        <option value="">-- Sort --</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                        <option value="newToOld">Newest to oldest</option>
                        <option value="oldToNew">Oldest to Newest</option>
                    </select>
                </div>
                <div className="extra">
                    <Link to="/addplant">
                        <button>Add Plant</button>
                    </Link>
                    <Link to="/editplant">
                        <button>Edit Plant</button>
                    </Link>
                </div>
            </div>
            <Route path='/plants/addplant' component={AddPlant} />
            <Route path='/plants/editplant' component={EditPlant} />
            <div className="plantList">
                {
                    data.map(item => {
                        return (
                            <div>
                                <div className="plant" key={item.plant_id}>
                                    <div>
                                        <img src={item.image} alt={item.plant_nickname} />
                                    </div>
                                    <p>Species: {item.species_name}</p>
                                    <p>H20 Frequency: {item.h2o_frequency}</p>
                                    <p>Name: {item.plant_nickname}</p>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}