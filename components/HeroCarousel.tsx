"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
 
    {imgUrl: '/assets/images/cake.png', alt: 'cake'},
    {imgUrl: '/assets/images/samosa.png', alt: 'samosa'},
    {imgUrl: '/assets/images/muffin.png', alt: 'muffin'},
    {imgUrl: '/assets/images/samosa02.png', alt: 'smosa'},
    {imgUrl: '/assets/images/scons.png', alt: 'scones'},
    
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
        <Carousel
        showThumbs ={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows ={false}
        showStatus ={false}
        >
         {heroImages.map((image) => (
              <Image
               src={image.imgUrl}
               alt={image.alt}
               width={480}
               height={480}
               className="object-contain"
               key={image.alt}
              />
            ))}
        
           

        </Carousel>

        <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="hand arrow"
        width={175}
        height={175}
        className="max-lg:hidden absolute -left-[15%] z-0 bottom-0 "
        />

<Image
        src="/assets/images/ribbon.png"
        alt="hand arrow"
        width={190}
        height={175}
        className="max-lg:hidden absolute -left-[125%] z-0 top-0 "
        />
        
    </div>
  )
}

export default HeroCarousel