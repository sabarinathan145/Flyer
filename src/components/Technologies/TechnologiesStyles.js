import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const ExperienceText = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 900px;
  margin-bottom: 1rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 26px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ExperienceHeading = styled.p`
  font-size: 20px;
  font-weight: 800;
  line-height: 30px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  margin-bottom: 0.75rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 19px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 26px;
  }
`

export const ExperienceList = styled.ul`
  text-align: justify;
  list-style-type: disc;
  padding-left: 1.2rem;
  margin: 0 0 1rem 0;
  max-width: 900px;
`

export const ExperienceListItem = styled.li`
  margin-bottom: 0.85rem;
  font-size: 18px;
  line-height: 28px;  
  text-align: justify;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #13ADC7;
    font-weight: bold;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 26px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`

export const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 1.5rem;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(3, minmax(120px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
`

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
`

export const TechIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
  color: #00bcd4;
`

export const TechLabel = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
`

