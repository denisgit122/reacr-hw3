import {Car} from "./Car";

const Cars = ({cars,setData,setCar}) => {

    return (
  <div>
    {cars.map(value => <Car key={value.id} car={value} setData={setData} setCar={setCar} cars={cars}/>)}
  </div>
);
};

export {Cars};