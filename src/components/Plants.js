import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from './../utils/axiosWithAuth';

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
    },[])

    return (
        <section>
            <div className="tools">
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
            <div className="plantList">
                {
                    data.map(item => {
                        return (
                            <div key={item.plant_id}>
                                <img src={item.image} alt={item.plant_nickname} />
                                <p>Species: {item.species_name}</p>
                                <p>H20 Frequency: {item.h2o_frequency}</p>
                                <p>Name: {item.plant_nickname}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}