
import {Cars} from "./components/Cars";
import {FormCar} from "./components/FormCar";
import {useEffect, useState} from "react";
import {carsServ} from "./service";

function App() {
    const [cars,setCars]= useState([])
    const [data,setData]=useState(null)
    console.log(data);

    useEffect(() => {
        carsServ.getAll().then(value => value.data).then(value => setCars([...value]));
    },[])

    // console.log(cars);

    return (
    <div className="App">
        <FormCar setCars={setCars} data={data} setData={setData}/>
        <hr/>
      <Cars cars={cars} setData={setData} setCar={setCars} />
    </div>
  );
}

export default App;
