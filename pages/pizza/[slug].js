import Layout from "../../components/Layout";
import css from '../../styles/Pizza.module.css'
// import { createClient } from "@sanity/client";
import { urlFor } from "../../lib/client";
import {client} from '../../lib/client'
import Image from "next/Image";
import LeftArrow from '../../assets/arrowLeft.png'
import rightArrow from '../../assets/arrowRight.png'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useStore } from "../../store/store";
export default function Pizza({pizza}) {
// console.log(pizza)
const src=urlFor(pizza.image).url()
const [Size,setSize]=useState(1)
const [Quantity,setQuantity]=useState(1)


const handleQuantity=(type)=>{
    type === 'inc'?
    setQuantity((prev)=>(prev+1)):
    Quantity ===1  ?null
    :setQuantity((prev)=>(prev-1))
}
const addPizza = useStore((state)=>state.addPizza)
const addToCart=()=>{
    addPizza({...pizza,price: pizza.price[Size],quantity:Quantity,size:Size})
    toast.success('Added Cart!')
}
    return (

        <Layout>
            <div className={css.container}>
                <div className={css.imagewrapper}>
                    <Image loader={()=>src} alt='description of image' src={src}
                    layout="fill" unoptimized objectfit="cover"/>
                </div>

                {/* right */}
                <div className={css.right}>
               <span>{pizza.name}</span>
               <span>{pizza.details}</span>
               <span><span style={{color:"var(--themeRed)"}}>Rs.</span>{pizza.price[Size]}</span>
            <div className={css.size}>
                <span>Size</span>
                <div className={css.sizevarriant}>
                    <div className={Size == 0? css.selected:''} onClick={()=>setSize(0)}>Small</div>
                    <div className={Size == 1? css.selected:''}  onClick={()=>setSize(1)}>Medium</div>
                    <div className={Size == 2? css.selected:""}  onClick={()=>setSize(2)}>Large</div>
                </div>

            </div>
                {/* quantity */}
                <div className={css.quantity}>
                    <span>Quantity</span>
                    <div className={css.counter}>
                        <Image src={LeftArrow}
                        onClick={()=>handleQuantity("dec")}
                        objectFit="contain"
                        width={20}
                        height={20}/>
                        <span>{Quantity}</span>
                        <Image src={rightArrow}
                        onClick={()=>handleQuantity("inc")}
                        objectFit="contain"
                        width={20}
                        height={20}/>
                    </div>
                </div>
             {/* button */}
             <div className={`btn ${css.btn}`} onClick={addToCart} >
                Add to Cart
             <Toaster/>
             </div>
                </div>
            </div>
        </Layout>
    )
}





export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    )
     return {
         paths: paths.map((slug) =>
             ({ params: { slug } })),
         fallback: "blocking"
    }
}
export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current =='${slug}'][0]`

    )
    return {
        props: {
            pizza 
        }
}
}
