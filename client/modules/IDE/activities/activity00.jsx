import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Figure0 from './images/activity00_figure0.png';
import Figure1 from './images/activity00_figure1.png';
import Figure2 from './images/activity00_figure2.png';
import RightArrowIcon from '../../../images/right-arrow.svg';
import LeftArrowIcon from '../../../images/left-arrow.svg';

export default function Activity00() {
  return (
    <div className="carouselContainer">
      <h1> Put the bee on the flower </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow"
              style={{ left: 15 }}
            >
              <LeftArrowIcon focusable="false" aria-hidden="true" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="arrow"
              style={{ right: 15 }}
            >
              <RightArrowIcon focusable="false" aria-hidden="true" />
            </button>
          )
        }
      >
        <div className="carouselItem">
          <h3> Attach the flower piece to see the flower </h3>
          <img src={Figure0} alt="" />
        </div>
        <div className="carouselItem">
          <h3> Take the flower off and attach the bee piece to see the bee </h3>
          <img src={Figure1} alt="" />
        </div>
        <div className="carouselItem">
          <h3>
            {' '}
            Now lets put the bee on the flower. First, we have to add the
            flower, so the bee has a place to sit. Once the flower is added, we
            can add the bee on top.{' '}
          </h3>
          <img src={Figure2} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
