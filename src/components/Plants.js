import React from "react";

//Proc data to render on the page
const data = [
    {
        "image":"../flowerImages/cotula-coronopifolia1.jpg",
        "category": "Container Plants",
        "instructions": "Cotula have very fragrant orange flowers that bloom in the middle of summer.",
        "name": "Cotula",
        "productId": 14
      },
      {
          "image":"../flowerImages/Pelargonium_peltatum.jpg",
        "category": "Container Plants",
        "instructions": "Well drained neutral to slightly acid soil, bright light. Do not over-fertilize or these flowers will lose scent.",
        "name": "Pelargonium Peltatum",
        "productId": 15
      },
      {
          "image":"../flowerImages/pansyBlueShade.jpg",
        "category": "Container Plants",
        "instructions": "Compact mounds of colorful dainty flowers, good for window boxes. Fertile well drained soil.",
        "name": "Pansy Blue Shades",
        "productId": 16
      },
      {
          "image": "../flowerImages/Pansy-Rhinegold-1.jpg",
        "category": "Container Plants",
        "instructions": "Compact mounds of colorful dainty flowers, good for window boxes. Fertile well drained soil.",
        "name": "Pansy Yellow with Blotch",
        "productId": 17
      },
      {
        "image": "../flowerImages/purple-phalaenopsis-orchid-david-waldo.jpg",
        "category": "Container Plants",
        "instructions": "Choose the brightest windows in your house for your orchids, place on an humidity tray and spray regularly.",
        "name": "Phalaenopsis Purple",
        "productId": 18
      }
];

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
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="newToOld">Newest to oldest</option>
                    <option value="oldToNew">Oldest to Newest</option>
                </select>
            </div>
            <div className="plantList">
                {
                    data.forEach(item => {
                        return (
                            <div>
                                <img src={item.image} alt=""/>
                                <p>Category: {item.category}</p>
                                <p>Name: {item.name}</p>
                                <p>Instructions: {item.instructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}