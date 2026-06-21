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
        Backend Software Engineer with 3 years building scalable cloud-native microservices and REST APIs for healthcare platforms. Skilled in distributed systems, SQL/NoSQL, and Azure DevOps CI/CD; supported 100,000+ member records and earned Rookie of the Year 2025 for integration excellence.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;