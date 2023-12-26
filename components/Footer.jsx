import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilFacebook,UilGithub,UilLinkedin} from '@iconscout/react-unicons'
const Footer = () => {
  return (
    <div>
<div className={css.container}>
<span>All Right Reserved</span>
<div className={css.social}>
  <UilLinkedin size={45}/>
  <UilGithub  size={45}/>
  <UilFacebook  size={45}/>
</div>
<div className={css.logo}>
  <Image src={Logo} alt='description of image'/>
  <span>Fudos</span>
</div>
</div>
    </div>
  )
}

export default Footer
