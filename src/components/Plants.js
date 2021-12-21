import React from "react";

export default function Plants(props) {

    const { values, update } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

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
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Newest to oldest">Newest to oldest</option>
                    <option value="Oldest to Newest">Oldest to Newest</option>
                </select>
            </div>
            <div className="plantList">

            </div>
        </section>
    )
}