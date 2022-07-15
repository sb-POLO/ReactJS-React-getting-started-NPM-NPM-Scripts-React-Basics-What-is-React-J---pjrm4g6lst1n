import '../styles/App.css';
import React, { Component, useEffect, useState } from "react";
import Slides from "./Slides"

const App = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [restartButtonDisabled, setRestartButtonDisabled] = useState(true);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const restartSlide = () => {
    setCurrentSlide(0);
    setNextButtonDisabled(!setNextButtonDisabled);
    setPrevButtonDisabled(!setPrevButtonDisabled);
  };

  useEffect(() => {
    // Next button disable
    if (currentSlide < slides.length - 1) {
      setNextButtonDisabled(false);
    } else {
      setNextButtonDisabled(true);
    }

    // Prev button disable
    if (currentSlide > 0) {
      setPrevButtonDisabled(false);
    } else {
      setPrevButtonDisabled(true);
    }

    // Restart button disable
    if (currentSlide === 0) {
      setRestartButtonDisabled(true);
    } else {
      setRestartButtonDisabled(false);
    }
  }, [currentSlide]);


  return (
    <div>
      <Slides
        title={slides[currentSlide].title}
        text={slides[currentSlide].text}
      />

      <div id='navigation'>
        <button data-testid="button-prev"
          onClick={prevSlide}
          disabled={prevButtonDisabled}
        >
          Prev
        </button>

        <button data-testid="button-next"
          onClick={nextSlide}
          disabled={nextButtonDisabled}
        >
          Next
        </button>

        <button data-testid="button-restart"
          onClick={restartSlide}
          disabled={restartButtonDisabled}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default App;