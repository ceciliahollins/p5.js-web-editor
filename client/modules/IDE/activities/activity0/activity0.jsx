import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Figure0 from './activity0_figure0.png';
import Figure1 from './activity0_figure1.png';
import Figure2 from './activity0_figure2.png';
import RightArrowIcon from '../../../../images/right-arrow.svg';
import LeftArrowIcon from '../../../../images/left-arrow.svg';
import CircleIcon from '../../../../images/circle.svg';

export default function Activity0() {
  return (
    <div className="carouselContainer">
      <h1> Activity 0: Basic use of puzzle pieces and understanding errors </h1>
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
        <div className="carouselItem">
          <h3>
            {' '}
            Find the code piece that says `bee` and connect it at the top. Add
            the bee piece, see how there are errors. The bee needs some
            information. Where should the bee sit? We must tell it.{' '}
          </h3>
          <img src={Figure1} alt="" />
          <h3>
            We get some errors! This is because the bee needs information to be
            on the screen. It must know where it should sit. We can give the bee
            its information with more code pieces.
          </h3>
        </div>
        <div className="carouselItem">
          <h3>
            {' '}
            Find the two code pieces that say `center`. These will attach on the
            right side of the bee piece. These code pices tell the bee to sit in
            the middle of the screen.{' '}
          </h3>
          <img src={Figure1} alt="" />
          <h3>
            {' '}
            We get no more errors! The computer is happy because it has all the
            information it needs to draw a bee.{' '}
          </h3>
        </div>
        <div className="carouselItem">
          <h3>
            {' '}
            Try taking one piece off, we get errors again. This is the computer
            telling us that it doesnt understand what we are trying to do.{' '}
          </h3>
          <img src={Figure1} alt="" />
          <h3>
            The bee needs two attachements, and we only added one. We have to
            make sure we add all the required puzzle pieces the computer needs,
            so that it can build what we are trying to make.
          </h3>
        </div>
        <div className="carouselItem">
          <h3>
            {' '}
            Add the center piece back on again, and the computer is happy!{' '}
          </h3>
          <img src={Figure1} alt="" />
          <h3>
            We must make sure we have all of our pieces inserted, or else we get
            errors.
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
