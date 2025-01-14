// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';


import img1 from '../assets/slide1.jpg' 
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import img4 from '../assets/slide4.jpg'
import img5 from '../assets/slide5.jpg'
import img6 from '../assets/slide6.jpg'
import img7 from '../assets/slide7.jpg'
import img8 from '../assets/slide8.jpg'
import img9 from '../assets/slide9.jpg'
import img10 from '../assets/slide10.jpg'
import img11 from '../assets/slide11.jpg'
import img13 from '../assets/slide13.jpg'
import img14 from '../assets/slide14.jpg'
import img15 from '../assets/slide15.jpg'
import img16 from '../assets/slide16.jpg'
import img17 from '../assets/slide17.jpg'
import img18 from '../assets/slide18.jpg'
import img19 from '../assets/slide19.jpg'
import img20 from '../assets/slide20.jpg'
import img21 from '../assets/slide21.jpg'
import img22 from '../assets/slide22.jpg'

const images=[img1, img2, img3, img4, img5, img6, img7, img8, img11, img13, img9, img10, img14, img15, img16, img17, img18, img19, img20, 
  img21, img22]
const Slider= ()=>{
    const options = {
        type: "loop",
        gap: "1rem",
        // top: '-10rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: "25rem",
        cover: true,
        // width: '200rem'
      };
    return(
        <div className="">
        <div className="absolute top-20  -left-8 -right-8">
        <Splide
            className=""
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div className="relative">
            <SplideTrack>
                {images.map((item, i) => (
                  <SplideSlide key={i} className="h-full">
                    <img src={item} alt="" className="w-full object-cover rounded-md" />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
  
            <div className="splide__progress relative">
              <div className="splide__progress__bar " />
            </div>
          </Splide>
        </div>
       </div>
  
    )
}

export default Slider