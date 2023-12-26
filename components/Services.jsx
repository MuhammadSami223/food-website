import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s3 from '../assets/s3.png'
import s2 from '../assets/s2.png'
function Services() {
  return (
    <div>
      <div className={css.heading}>
        <span>What We Serve</span>
        <span>Your Favourite Food</span>
        <span>Deleivery Partner</span>
      </div>

      <div className={css.services}>
        <div className={css.feature}>
            <div className={css.imagewrapper}>

            <Image src={s1} alt="description of image" object-fit="cover"
            layout="intrinsic"/>
            </div>
            <span>Easy to food order</span>
            <span>You only need a few steps in food ordering</span>
        </div>
        <div className={css.feature}><div className={css.imagewrapper}>

<Image src={s2} alt="description of image" object-fit="cover"
layout="intrinsic"/>
</div>
<span>Easy to food order</span>
<span>You only need a few steps in food ordering</span></div>
        <div className={css.feature}><div className={css.imagewrapper}>

<Image src={s3} alt="description of image" object-fit="cover"
layout="intrinsic"/>
</div>
<span>Easy to food order</span>
<span>You only need a few steps in food orderings</span></div>
      </div>
    </div>
  )
}

export default Services
