import {carsServ} from "../service";
import {useEffect} from "react";

const Car = ({car,setData,setCar}) => {
    const {brand,price,year}=car


        const del = async (id) => {
            console.log(id);
            await carsServ.delete(id)

        }



return (
  <div>
      <h2>brand: {brand}</h2>
      <h2>price: {price}</h2>
      <h2>year: {year}</h2>
      <button onClick={()=>setData(car)} >copy</button>
      <button onClick={()=>del(car.id)}>delete</button>



  </div>
);
};

export {Car};