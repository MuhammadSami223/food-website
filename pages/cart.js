import Layout from "../components/Layout"
import { urlFor } from "../lib/client"
import { useStore } from "../store/store"
import Image from "next/image"
import css from '../styles/Cart.module.css'
import toast,{ Toaster } from "react-hot-toast"
import { useState } from "react"
import OrderModal from "../components/OrderModal"
export default function Cart() {
    const CartData = useStore((state) => state.cart)
    const removePizza =useStore((state)=>state.removePizza)
    const [PaymentMethod, setPaymentMethod] = useState(null)
    const handleRemove=(i)=>{
        removePizza(i)
        toast.error('item removed')
    }
    const total=()=>CartData.pizzas.reduce((a,b)=>a+b.quantity*b.price,0);
    const handleOnDelivery=()=>{
        setPaymentMethod(0)
        typeof window!=="undefined"&&localStorage.setItem('total',total())
    }
    return (
        <Layout>
            <div>
                <div className={css.container}>
                    <div className={css.details}>
                <div className={css.theading}>

                    <span>pizza</span>
                    <span>Name</span>
                    <span>Size</span>
                    <span>Price</span>
                    <span>Qty</span>
                    <span>Total</span>
                    <span></span>
                </div>

                {
                    CartData.pizzas.length > 0 &&
                    CartData.pizzas.map((pizza, i) => {
                        const src = urlFor(pizza.image).url()
                        return (
                            <div key={i} className={css.cart}>
                                <tbody className={css.details}>

                                    <tr> 
                                        <td className={css.imagetd}>
                                            <Image
                                                loader={() => src}
                                                src={src}
                                                width={85}
                                                height={85}
                                                objectFit="cover"
                                                className={css.cartimg} />

                                        </td>
                                        <td>{pizza.name}</td>
                                        <td>{pizza.size === 0 ?
                                            "Samll" :
                                            pizza.size === 1 ?
                                            "Medium" :
                                            "Large"}
                                                </td>
                                            <td>{pizza.price}</td>
                                                <td>{pizza.quantity}</td>
                                                <td>{pizza.price*pizza.quantity}</td>
                                                <td
                                                style={{color:"var(--themeRed)" ,cursor:'pointer'}}
                                                onClick={()=>handleRemove(i)}
                                                >x</td>
                                    </tr>
                                </tbody>
                            </div>

                        )
                    }
                    )
                }
            </div>
                <div className={css.carts}>
                <span>CheckOut</span>
                <div className={css.cartdetails}>
                    <div>
                        <span>items</span>
                        <span>{CartData.pizzas.length}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>Rs.{total()}</span>
                    </div>
                </div>
                    <div className={css.button}>
                        <button className="btn" style={{background:"var(--themeRed)",color:"white",fontSize:"14px"}} onClick={handleOnDelivery}>Order Now</button>
                        {/* <button className="btn">Pay Now</button> */}
                    </div>
                </div>




            </div>
            </div>
            <Toaster/>
            <OrderModal open={PaymentMethod===0}
            setOpened={setPaymentMethod}
            PaymentMethod={PaymentMethod}
            /> 
        </Layout>
    )
}











