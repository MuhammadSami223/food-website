import css from '../styles/Header.module.css'
import Logo from '../assets/Logo.png'
import Image from 'next/Image'
import { useStore } from '../store/store'
import { UilShoppingBag } from '@iconscout/react-unicons'
import Link from 'next/link'
export default function Header() {
  const state = useStore((state) => state)
  const items = useStore((state) => state.cart.pizzas.length)
  // console.log(state)




  return (
    <>
      <div className={css.header}>
        {/* logo side */}
        <Link href='/'>
          <div className={css.logo}>
            <Image src={Logo} alt='description of image' />
            <span>Fudo</span>
          </div>
        </Link>
        {/* menu side */}
        <div className={css.menu}>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <Link href='/cart'>
        {/* right side */}
          <div className={css.right}>
            <UilShoppingBag size={35} />
            <div className={css.badge}>
              {items}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
