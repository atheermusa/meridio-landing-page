import React from 'react';

import config from '../config/index.json';

const AboutUs = () => {
  const { features } = config;
  const { title, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="aboutUs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative flex">
                  <div
                    className={`absolute flex items-center justify-center h-24 w-24 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <div className='mt-2 ml-16 pl-16'>
                  <p className="text-xl leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                  <p className="text-base text-gray-400 italic">
                    Co-founder
                  </p>
                <dd className="text-base text-gray-500">
                  {feature.description}
                </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
