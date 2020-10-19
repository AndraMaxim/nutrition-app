import React from 'react';
import Icon1 from '../../images/undraw_modern_professional_yt9h.svg';
import Icon2 from '../../images/undraw_career_development_oqcb.svg';
import Icon3 from '../../images/undraw_active_options_8je6-2.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>For Individuals</ServicesH2>
          <ServicesP>
            Good for setting goals and logging daily workouts.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>For Professionals</ServicesH2>
          <ServicesP>
            Best for coaches. Unlimited Basic athletes profiles
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Best for analyzing workouts and tracking fitness.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
