import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>  
         Sabarinathan K S 
        </SectionTitle>
        <SectionText>
        A Detail-Oriented Engineering graduate, pursuing to ameliorate proficiency,in the branch of knowledge domain. Highly proficient, IT student, organized professionals with ingenious attitude and vigorous project administrating capability.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;