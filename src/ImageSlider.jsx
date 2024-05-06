import React, {useState} from "react";



function ImageSlider({ slides }){
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNext = () => {
        let isLast = currentSlide === slides.length - 1;
        const newSlide = isLast ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide); 
    }

    const goToPrevious = () => {
        let isFirst = currentSlide === 0;
        const newSlide = isFirst ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    const goToSlide = (chosenSlide) => {
        setCurrentSlide(chosenSlide);
    }

    const sliderSyles = {
        height: '100%',
        position: 'relative'
    }

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentSlide].url})`
    }

    const leftArrowStyle = {
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px'
    }

    const rightArrowStyle = {
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px'
    }
    
    const pickerStyle = {
        display: 'flex',
        justifyContent: 'center',
    }

    const dotStyle = {
        margin: "0 10px",
        cursor: "pointer",
        fontSize: "20px",
    }

    return(
        <div className="sliderContainer" style={sliderSyles}>
            <div className="slide_arrows sliderContainer" style={leftArrowStyle} onClick={goToPrevious}>❰</div>
            <div className="slide_arrows sliderContainer" style={rightArrowStyle} onClick={goToNext}>❱</div>
            <div style={slideStyle}></div>
            <div style={pickerStyle}>{slides.map((slides, slideIndex) =>( <div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>))}
            </div>
        </div>
    )
}

export default ImageSlider;