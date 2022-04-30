import React from 'react';

// import About from '../components/About';
// import Analytics from '../components/Analytics';
import AboutUs from '../components/AboutUs';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
// import Pricing from '../components/Pricing';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-8 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <>
          <HowItWorks />
          {/* <Canvas /> */}
        </>
      </LazyShow>
      <LazyShow>
        <>
          <AboutUs />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow> */}
      {/* <Pricing /> */}
      {/* </LazyShow> */}
      {/* <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow> */}
      {/* <Analytics /> */}
    </div>
  );
};

export default App;
