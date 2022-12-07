import React from 'react'

export default function ListEx() {
    const Cars=[{model:"Maruti",id:1},
    {model:"Hyundai",id:2},
    {model:"Venue",id:3}, 
    {model:"skyline",id:4}];
    const listCars=Cars.map((val)=><li key={val.id}>{val.model}</li>);
    return (
      <div>
      {listCars}</div>
  )
}


