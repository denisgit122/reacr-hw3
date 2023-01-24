import {axiosServ} from "./axiosServ";
import {urls} from "../const";

const carsServ={
    getAll:()=>axiosServ.get(urls.cars),
    create:(newCar)=>axiosServ.post(urls.cars,newCar), //    через кому вказуємо які саме дані передаємо(те саме що передаємо у функцію)
    delete:(id)=>axiosServ.delete( `${urls.cars}/${id}`),
    updateId:(id, data)=>axiosServ.put(`${urls.cars}/${id}`,data)//    передаємо ід і дані які оновлюю


}
export {carsServ}