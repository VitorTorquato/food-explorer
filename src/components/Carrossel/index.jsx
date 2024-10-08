import {CarrosselContainer} from './styles'
import { useState,useEffect } from 'react';
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from 'keen-slider/react';







export function Carrosel({children}){

 
   const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 1,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      mode: "free",
      breakpoints: {
        "(min-width:320px)":{
          slides:{perView:1}
        },
        "(min-width:425px)":{
          slides:{perView:1,spacing:1}
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 2 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
     
      },
   
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
      const resizeHandler = () => {
        if (instanceRef.current) {
          instanceRef.current.update();
        }
      };
  
      window.addEventListener('resize', resizeHandler);
  
      // Força a atualização do slider 100ms após o componente ser montado
      setTimeout(() => {
        if (instanceRef.current) {
          instanceRef.current.update();
        }
      }, 1000);
  
      // Cleanup do listener ao desmontar o componente
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
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

