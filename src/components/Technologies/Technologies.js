import React from 'react';
import { SiJava, SiSpring, SiMysql, SiPostgresql, SiMongodb, SiApachemaven, SiAzuredevops, SiGithub, SiSwagger, SiPostman, SiDocker } from 'react-icons/si';
import { FaProjectDiagram } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ExperienceText, ExperienceHeading, ExperienceList, ExperienceListItem, TechList, TechItem, TechIcon, TechLabel } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Professional Experience</SectionTitle>
    <ExperienceHeading>
      Cognizant Technology Solutions (TriZetto, Healthcare Domain)
    </ExperienceHeading>
      <br />
    <ExperienceText>
      Software Engineer - Java Backend | Chennai, India | 09/2023 – Present
    </ExperienceText>
    <ExperienceText>
      Sole backend engineer owning two enterprise healthcare systems, Core Integration Layer (CIL) and Engage Cost Estimator (ECE), supporting 100,000+ member records in distributed payer environments.
    </ExperienceText>
    <ExperienceHeading>Key achievements:</ExperienceHeading>
    <ExperienceList>
      <ExperienceListItem>Built Java 11/Spring Boot microservices with 15+ REST APIs for healthcare cost estimation and member management.</ExperienceListItem>
      <ExperienceListItem>Integrated Facets and QNXT platforms with secure REST contracts, cutting cross-system errors by 35%.</ExperienceListItem>
      <ExperienceListItem>Automated Azure DevOps CI/CD across INT/QA/PAT/PERF, reducing manual deploy effort 40% and enabling zero-downtime releases.</ExperienceListItem>
      <ExperienceListItem>Optimized JPA/Hibernate and SQL queries for MySQL/PostgreSQL, improving throughput 25% on high-volume record processing.</ExperienceListItem>
      <ExperienceListItem>Delivered full SDLC ownership across 10+ quarterly Agile releases and resolved Maven build issues to reduce failures 30%.</ExperienceListItem>
    </ExperienceList>
    <ExperienceHeading>Technologies used:</ExperienceHeading>
    <TechList>
      <TechItem>
        <TechIcon><SiJava /></TechIcon>
        <TechLabel>Java 11</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiSpring /></TechIcon>
        <TechLabel>Spring Boot</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiSpring /></TechIcon>
        <TechLabel>Spring MVC</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiApachemaven /></TechIcon>
        <TechLabel>Spring Data JPA</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiApachemaven /></TechIcon>
        <TechLabel>Hibernate</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiMysql /></TechIcon>
        <TechLabel>MySQL</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiPostgresql /></TechIcon>
        <TechLabel>PostgreSQL</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiMongodb /></TechIcon>
        <TechLabel>MongoDB</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiAzuredevops /></TechIcon>
        <TechLabel>Azure DevOps</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiGithub /></TechIcon>
        <TechLabel>Git</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiSwagger /></TechIcon>
        <TechLabel>Swagger</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiPostman /></TechIcon>
        <TechLabel>Postman</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><FaProjectDiagram /></TechIcon>
        <TechLabel>REST APIs</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><SiDocker /></TechIcon>
        <TechLabel>Microservices</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><FaProjectDiagram /></TechIcon>
        <TechLabel>Facets</TechLabel>
      </TechItem>
      <TechItem>
        <TechIcon><FaProjectDiagram /></TechIcon>
        <TechLabel>QNXT</TechLabel>
      </TechItem>
    </TechList>
    <SectionDivider colorAlt />
  </Section>
);
export default Technologies;
