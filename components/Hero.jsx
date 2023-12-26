import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png' 
import HeroImage from '../assets/HeroImage.png' 
import Pizza1 from '../assets/p1.jpg' 
// import {FaPhoneAlt} from 'react-icons/fa'
import Image from 'next/image'
function Hero() {
  return (
    <div>
        <div className={css.container}>
          <div className={css.left}>
            <div className={css.cherrydiv}>
<span>More Than faster</span>
<Image  src={Cherry} alt='description of image' width={35} height={25}
/>
            </div>

            <div className={css.herotext}>
              <span>Be The Fastest</span>
              <span>In Deleivery</span>
              <span>Your <span style={{color:"var(--themeRed)"}}>Pizza</span></span>
            </div>
            <div className={css.minitext}>
              <span>Our mission is to filling your tummy with delicious food and with fast and free delievery</span>
            </div>
              <button className={`btn ${css.herobtn}`}>Get Started</button>


            {/* left side */}
          </div>
          <div className={css.right}>
            <div className={css.imagecontainer}>
              <Image src={HeroImage} layout='intrinsic' alt='description of image'/>
            </div>
            <div className={css.contact}>
              <span>Contact Us</span>
            <div>
              {/* <FaPhoneAlt color='white'/> */}
            </div>
            </div>

            <div className={css.pizza}>
              <div>
                <Image src={Pizza1} alt='description of image' layout='intrinsic' objectFit='cover'/>
              </div>
              <div className={css.detail}>
                <span>Italian pizza</span>
                <span><span style={{color:'var(--themeRed)'}}>Rs.</span>999</span>
              </div>
            </div>
            {/* right side */}
          </div>

        </div>
    </div>
  )
}

export default Hero
