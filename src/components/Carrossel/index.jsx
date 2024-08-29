import {CarrosselContainer} from './styles'
import { useState,useEffect } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';







export function Carrosel({children}){

 
   const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        "(min-width: 350px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    })

    function Arrow(props) {
      const disabled = props.disabled ? " arrow--disabled" : ""
      return (
        <svg
          onClick={props.onClick}
          className={`arrow ${
            props.left ? "arrow--left" : "arrow--right"
          } ${disabled}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          )}
          {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          )}
        </svg>
      )
    }


    useEffect(() => {
      setTimeout(() => {
        if (instanceRef.current) {
          instanceRef.current.update();
        }
      }, 100);
    }, []);
    return(

        <CarrosselContainer>
        
      <div ref={sliderRef} className="keen-slider">
         <div className='right-opacity'></div>
            {children}
          <div className='left-opacity'></div>
       

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
               }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
               }
               
               />
          </>
        )}

        
    </div>

        </CarrosselContainer>
    )    
                  




}

