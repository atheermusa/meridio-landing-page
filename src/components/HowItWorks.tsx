import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import config from '../config/index.json';
import Divider from './Divider';

const HowItWorks = () => {
  const { howItWorks } = config;
  const [customerFlow, cookFlow] = howItWorks.items;
  const [customerSteps, cookSteps] = howItWorks.steps;

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
        <div className="flex justify-center">
          <p className="mt-4 px-4 max-w-lg text-center text-xl text-gray-500 lg:mx-auto">
            {howItWorks.description}
          </p>
        </div>
        <div className={`flex flex-wrap justify-center`}>
          <div className={`w-full sm:w-1/2 p-6 mt-16`}>
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
              <a href="https://pcmttx0aixz.typeform.com/to/DcqfdFGO">
                <span className="text-primary hover:underline">
                  {customerFlow?.cta}
                </span>
              </a>
            </p>
          </div>
          <div
            className={`w-full sm:w-1/2 max-w-lg p-6 flex flex-col items-center justify-around`}
          >
            <Carousel showThumbs={false} showStatus={false} emulateTouch={true}>
              {customerSteps &&
                customerSteps.map((step) => (
                  <div key={step.id} className="h-6/6 w-full flex">
                    <img src={step.src} alt={step.alt} />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
        <div className="w-full h-1 bg-primary opacity-25 my-4"></div>
        <div
          className={`flex flex-wrap h-6/6 flex-col-reverse sm:flex-row justify-center`}
        >
          <div
            className={`w-full sm:w-1/2 p-6 max-w-lg flex flex-col items-center`}
          >
            <Carousel showThumbs={false} showStatus={false} emulateTouch={true}>
              {cookSteps &&
                cookSteps.map((step) => (
                  <div key={step.id} className="h-6/6 w-full flex">
                    <img src={step.src} alt={step.alt} />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-16`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {cookFlow?.title}
              </h3>
              <p className={`text-gray-600 mb-1`}>{cookFlow?.descriptionOne}</p>
              <p className={`text-gray-600 mb-1`}>
                {cookFlow?.descriptionTwo}
                <a href="https://pcmttx0aixz.typeform.com/to/DcqfdFGO">
                  <span className="text-primary hover:underline">
                    {cookFlow?.cta}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
