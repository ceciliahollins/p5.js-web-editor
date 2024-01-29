import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../../../images/right-arrow.svg';
import LeftArrowIcon from '../../../images/left-arrow.svg';
import CircleIcon from '../../../images/circle.svg';
import Figure1 from '../activities/activity0/activity0_figure0.png';

import data from '../activities/activity0/activity0_data.json';

function createActivityView() {
  const indents = [];

  // I know better than heaps of conditionals, but this took me long enough so im gonna take the win for now
  if (data.slide0Top !== '' && data.slide0Bottom !== '') {
    indents.push(
      <div className="carouselItem">
        <h3>{data.slide0Top}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slide0Bottom}</h3>
      </div>
    );
  }

  if (data.slide1Top !== '' && data.slide1Bottom !== '') {
    indents.push(
      <div className="carouselItem">
        <h3>{data.slide1Top}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slide1Bottom}</h3>
      </div>
    );
  }

  if (data.slide2Top !== '' && data.slide2Bottom !== '') {
    indents.push(
      <div className="carouselItem">
        <h3>{data.slide2Top}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slide2Bottom}</h3>
      </div>
    );
  }

  if (data.slide3Top !== '' && data.slide3Bottom !== '') {
    indents.push(
      <div className="carouselItem">
        <h3>{data.slide3Top}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slide3Bottom}</h3>
      </div>
    );
  }

  if (data.slide4Top !== '' && data.slide4Bottom !== '') {
    indents.push(
      <div className="carouselItem">
        <h3>{data.slide4Top}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slide4Bottom}</h3>
      </div>
    );
  }

  return indents;
}

const Activity = () => {
  const temp = [];
  return (
    <div className="carouselContainer">
      <h1> {data.title} </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <LeftArrowIcon
              className="arrow"
              style={{ left: 15 }}
              onClick={onClickHandler}
              focusable="false"
              aria-hidden="true"
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <RightArrowIcon
              className="arrow"
              style={{ right: 15 }}
              onClick={onClickHandler}
              focusable="false"
              aria-hidden="true"
            />
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <CircleIcon className="indicator" style={{ color: '#8f8f8f' }} />
            );
          }
          return (
            <CircleIcon
              className="indicator"
              onClick={onClickHandler}
              value={index}
              key={index}
              focusable="false"
            />
          );
        }}
      >
        {createActivityView()}
        {/* <div className="carouselItem">
        <h3>{data.slideOneBottom}</h3>
        <img src={Figure1} alt="" />
        <h3>{data.slideOneTop}</h3>
      </div>
      {data.slideTwoTop !== '' && data.slideTwoBottom !== '' && (
        <div className="carouselItem">
          <h3>{data.slideTwoTop}</h3>
          <img src={Figure1} alt="" />
          <h3>{data.slideTwoBottom}</h3>
        </div>
      )}
      {data.slideThreeTop !== '' && data.slideThreeBottom !== '' && (
        <div className="carouselItem">
          <h3>{data.slideTwoTop}</h3>
          <img src={Figure1} alt="" />
          <h3>{data.slideTwoBottom}</h3>
        </div>
      )}
      {data.slideFourTop !== '' && data.slideFourBottom !== '' && (
        <div className="carouselItem">
          <h3>{data.slideTwoTop}</h3>
          <img src={Figure1} alt="" />
          <h3>{data.slideTwoBottom}</h3>
        </div>
      )}
      {data.slideFiveTop.length > 0 && data.slideFiveBottom.length > 0 && (
        <div className="carouselItem">
          <h3>{data.slideTwoTop}</h3>
          <img src={Figure1} alt="" />
          <h3>{data.slideTwoBottom}</h3>
        </div>
      )} */}
      </Carousel>
      <p>
        <Link to="/activity">test</Link>
      </p>
    </div>
  );
};

export default Activity;
