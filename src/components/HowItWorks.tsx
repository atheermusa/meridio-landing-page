import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import config from '../config/index.json';
import Divider from './Divider';

const HowItWorks = () => {
  const { howItWorks } = config;
  const [customerFlow, cookFlow] = howItWorks.items;

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
        <p className="mt-4 px-4 max-w-lg text-center text-xl text-gray-500 lg:mx-auto">
          {howItWorks.description}
        </p>
        <div className={`flex flex-wrap justify-center`}>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <h2
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {customerFlow?.title}
            </h2>
            <p className={`text-gray-600 mb-1`}>
              {customerFlow?.descriptionOne}
            </p>
            <p className={`text-gray-600 mb-1`}>
              {customerFlow?.descriptionTwo}
            </p>
            <p className={`text-gray-600 mb-1`}>
              {customerFlow?.descriptionThree}
            </p>
            <a href="https://pcmttx0aixz.typeform.com/to/DcqfdFGO">
              <p className="text-primary hover:underline">
                {customerFlow?.cta}
              </p>
            </a>
          </div>
          <div
            className={`w-full sm:w-1/2 max-w-lg p-6 flex flex-col items-center justify-around`}
          >
            <Carousel showThumbs={false} showStatus={false} emulateTouch={true}>
              <div className="h-6/6 w-full flex">
                <img
                  src="/assets/images/customerUserFlow/customerStepOne.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/customerUserFlow/customerStepTwo.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/customerUserFlow/customerStepThree.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/customerUserFlow/customerStepFour.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/customerUserFlow/customerStepFive.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-full h-1 bg-primary opacity-25"></div>
        <div
          className={`flex flex-wrap h-6/6 flex-col-reverse sm:flex-row justify-center`}
        >
          <div
            className={`w-full sm:w-1/2 p-6 max-w-lg flex flex-col items-center`}
          >
            <Carousel showThumbs={false} showStatus={false} emulateTouch={true}>
              <div className="h-6/6 w-full flex">
                <img
                  src="/assets/images/cookUserFlow/cookStepOne.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/cookUserFlow/cookStepTwo.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/cookUserFlow/cookStepThree.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/cookUserFlow/cookStepFour.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/cookUserFlow/cookStepFive.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
              <div className="h-6/6">
                <img
                  src="/assets/images/cookUserFlow/cookStepSix.png"
                  alt="First steps are to register and submit a sample and menu proposal"
                />
              </div>
            </Carousel>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {cookFlow?.title}
              </h3>
              <p className={`text-gray-600 mb-1`}>{cookFlow?.descriptionOne}</p>
              <p className={`text-gray-600 mb-1`}>{cookFlow?.descriptionTwo}</p>
              <a href="https://pcmttx0aixz.typeform.com/to/DcqfdFGO">
                <p className="text-primary hover:underline">
                  {customerFlow?.cta}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
