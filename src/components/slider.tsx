// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';


import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import img4 from '../assets/slide4.jpg'
import img7 from '../assets/slide7.jpg'
import img8 from '../assets/slide8.jpg'
import img18 from '../assets/slide18.jpg'
import img19 from '../assets/slide19.jpg'
import img20 from '../assets/slide20.jpg'
import img21 from '../assets/slide21.jpg'
import img22 from '../assets/slide22.jpg'

const images=[ img2, img3, img4,  img7, img8,   img18, img19, img20, 
  img21, img22]
const Slider= ()=>{
    const options = {
        type: "loop",
        gap: "1rem",
        // top: '-10rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: "28rem",
        cover: true,
        // width: '200rem'
        padding:0,
      };
    return(
        <div className="md:mt-20 mt-10 absolute md:relative md:-right-0 md:left-0 -right-8 -left-8">
        <Splide
            className=""
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div className="relative ">
            <SplideTrack className="rounded-3xl">
                {images.map((item, i) => (
                  <SplideSlide key={i} className="h-full">
                    <img src={item} alt="" className="w-full object-cover " />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>
  
            <div className="splide__progress relative">
              <div className="splide__progress__bar " />
            </div>
          </Splide>
        </div>
  
    )
}

export default Slider