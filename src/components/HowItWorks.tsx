import React from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import config from '../config/index.json';
import Divider from './Divider';

const HowItWorks = () => {
  const { howItWorks } = config;
  const [cookFlow, customerFlow] = howItWorks.items;

  return (
    <section className={`bg-background py-8`} id="howItWorks">
      <div className={`container mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {howItWorks.title.split(' ').map((word, index) => (
            <span key={index} className={'text-border'}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className="mt-4 px-4 max-w-2xl text-center text-xl text-gray-500 lg:mx-auto">
          {howItWorks.description}
        </p>
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {cookFlow?.title}
            </h3>
            <p className={`text-gray-600`}>{cookFlow?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6 flex flex-col items-center`}>
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              emulateTouch={true}
              showArrows={false}
            >
              <div className="h-6/6 w-full flex">
                <img
                  src="/assets/images/cookUserFlowOne.png"
                  className="ml-11 -mr-11"
                />
                <img
                  src="/assets/images/cookUserFlowTwo.png"
                  className="-mr-11"
                />
                <img src="/assets/images/cookUserFlowThree.png" />
              </div>
              <div className="h-6/6"></div>
              <div className="h-6/6"></div>
            </Carousel>
            {/* <img
              className="h-6/6 self-center"
              src={cookFlow?.img}
              alt={cookFlow?.title}
            /> */}
            <div className="flex w-full lg:w-1/3 items-center justify-around">
              <AiOutlineArrowLeft />
              <p className={`text-gray-600`}>Slide for more</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6 flex`}>
            <img
              className="h-6/6 self-center"
              src={customerFlow?.img}
              alt={customerFlow?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {customerFlow?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>
                {customerFlow?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
