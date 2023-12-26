import { urlFor } from '../lib/client'
import Image from 'next/image'
import css from '../styles/Menu.module.css'
import Link from 'next/link'
function Menu({ pizzas }) {
  // console.log(pizzas)
  return (
    <div>
      <div className={css.container}>
        <div className={css.headings}>
          <span>Our Menu</span>
          <span>Men That always</span>
          <span>Make you fall in Love</span>
        </div>

        {/* pizza */}
        <div className={css.menu}>

        {
          pizzas.map((pizza, id) => {
            const src=urlFor(pizza.image).url()
            return (
              <div className={css.pizza} key={id}>
                <Link href={`./pizza/${pizza.slug.current}`}>

                <div className={css.imagewrapper}>
                  <Image loader={()=>src}  src={src} alt='description of image' objectFit='cover' layout='fill'/>
                </div>
                </Link>
                <span>{pizza.name}</span>
                <span><span style={{color:"var(--themeRed)"}}>Rs.</span>{pizza.price[1]}</span>
              </div>
            )
          })
        }
      </div>
        </div>
    </div>
  )
}

export default Menu
