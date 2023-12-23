// import { useDisclosure } from '@mantine/hooks';
import { Modal} from '@mantine/core';
import css from '../styles/OrderModal.module.css'
import { useState } from 'react';
import { createOrder } from '../lib/OrderHandler';
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';
export default function OrderModal({open,setOpened,PaymentMethod}) {
//   const [{ open, close }] = useDisclosure(false);
const [FormData,setFormData]=useState({})
const resetCart=useStore((set)=>set.resetCart)
const total=typeof window!=='undefined'&& localStorage.getItem('total')
const pName=typeof window!=='undefined'&& localStorage.getItem('pName')
const handleInput=(e)=>{
setFormData({...FormData, [e.target.name]:e.target.value})
}
const handleSubmit=async(e)=>{
    e.preventDefault()
   const id =createOrder({...FormData,total,PaymentMethod,pName})
toast.success("order placed",)
console.log("order placed",id)
resetCart()
  }
  return (
    <>
      <Modal
        opened={open}
        onClose={()=>setOpened(null)}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
        <form action="" className={css.formcontainer} onSubmit={handleSubmit}>
            <input onChange={handleInput}type="text" name='name' required placeholder='Name'/>
            <input onChange={handleInput}type="text" name='pName' required placeholder='Pizza Name'/>
            <input onChange={handleInput} type="text" name='phone'required placeholder='Phone Number'/>
            <textarea onChange={handleInput} name="address" rows="3" required placeholder='Address'></textarea>
            
                <span>You will pay <span>Rs. {total}</span> on delivery</span>
            
            <button className="btn" type="submit">Place Order</button>
        </form>
        <Toaster/>
      </Modal>

    </>
  );
}