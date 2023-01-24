import {carsServ} from "../service";
import {useEffect} from "react";

const Car = ({cars,car,setData,setCar}) => {
    const {brand,price,year}=car


    const del = async (id) => {
           console.log(id);
           const index=cars.findIndex(value => value.id===id)
        console.log(index);
        await carsServ.delete(id)
            const slice=cars.slice(0,index)
        const sliceTwo=cars.slice(index+1)
        const sliceFin=[...slice, ...sliceTwo]
        // console.log(sliceTwo);
        console.log(sliceFin);

        setCar(sliceFin)
        // console.log(cars);

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