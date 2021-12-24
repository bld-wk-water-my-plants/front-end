import React, { useState, useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';
import { Link } from "react-router-dom";

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
                })
                .catch(err => {
                    console.error('Server Error', err)
                })
        }
        getData();
    }, []);

    const handleDelete=e=>{
        const id = e.target.id
        axiosWithAuth().delete(`/auth/plants/${id}`)
            .then(esp=>{
                setData(esp.data);
            })
            .catch(err => {
                    console.error('Server Error', err)
                })
        
    }

    return (
        <section className="plantSection">
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
                </div>
            </div>
            <hr />
            <div className="plantList">
                {
                    data.map(item => {
                        return (
                            <div className="plant">
                                <div className="plantInfo" key={item.plant_id}>
                                    <div className="info">
                                        <img src={item.image} alt={item.plant_nickname} />
                                        <p>Species: {item.species_name}</p>
                                        <p>H20 Frequency: {item.h2o_frequency}</p>
                                        <p>Name: {item.plant_nickname}</p>                                        
                                        <Link to={`/editplant/${item.plant_id}`}>
                                            <button id={item.plant_id}>Edit Plant</button>
                                        </Link>
                                        <button onClick={handleDelete} id={item.plant_id}>Delete</button>
                                    </div>
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