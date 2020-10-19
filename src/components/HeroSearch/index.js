import React from 'react';

import Video from '../../videos/video1.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
} from './HeroSearchElements';

function HeroSection() {

  return (
    <HeroContainer id='food'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video1/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroP>
          Start designing a nutrition plan that fits your lifestyle and preferences!
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
