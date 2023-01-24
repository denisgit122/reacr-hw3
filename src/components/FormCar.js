import {set, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carJoi} from "../Validator/joi";
import {carsServ} from "../service";
import {useEffect} from "react";

const FormCar = ({setCars,data,setData}) => {

  const{ register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm(
      {mode: 'all',
       resolver:joiResolver(carJoi)
      })

useEffect(() => {
    if (data) {
       setValue('brand', data.brand)
       setValue('price', data.price)
       setValue('year', data.year)


    }
},[data])

  const submit = async (ca) => {
      if (data){
          const res=await carsServ.updateId(data.id,ca)
              .then(value => value.data)
              .then(value => setData(value))

          console.log(res);


      }
      else {
          const {data}= await carsServ.create(ca)  // async await це інструмент за допомогою якого можна робити асинхронні речі  і синхронному порядку
          // console.log(data);              // коли прийшла відповідь від сервера після того буде відпрацьваний консоль лог
          setCars(prev=>[...prev,data]) // коли ми получили відповідь з сервера ми беремо сетКар і його старе значення і віддаємо новий масив в який
                                       // кладемо  всі попередні значення і новий кар
      }

      reset()
  }

return (
  <form onSubmit={handleSubmit(submit)}>

      <input type={'text'} placeholder={'brand'} {...register('brand')} />
      {errors.brand && <span>{errors.brand.message}</span>}

      <input type={'text'} placeholder={'price'} {...register('price')}/>
      {errors.price && <span>{errors.price.message}</span>}

      <input type={'text'} placeholder={'year'} {...register('year')}/>
      {errors.year && <span>{errors.year.message}</span>}
      <button
          disabled={!isValid}>
          {/*{  якщо хоть один інпут = ерор то натиснути на кнопку не можна  }*/}
          {data?'updata':'create'}
      </button>
  </form>
);
};

export {FormCar};