import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SectionTittle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  h1 {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    h1 {
      text-align: center;
      font-size: 24;
    }
  }
`

export const SectionProjects = styled(motion.div)`
  margin-top: 32px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 24px;
  row-gap: 32px;
  
`

export const ProjectContainer = styled(motion.div)`
  position: relative;
  width: 48%;
  height: 430px;


  &:hover {
    .bg-image {
      filter: brightness(0.3)
    }

    .informations {
      display: flex; 
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 180px;

  }
`

export const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.8s;
`

export const ProjectInformations = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 1s;


  .siteLink {
    position: absolute;
    left: 48%;
  }

  .gitHubLink {
    position: absolute;
    z-index: 2;
    width: 32px;
    left: 52%;
    border-radius: 100%;
  }

  .gitHubLinkSolo {
    position: absolute;
    z-index: 2;
    width: 32px;
    border-radius: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    
    .siteLink {
      left: 40%;
    }

    .gitHubLink {
      left: 50%;
    }
  }
`

export const ProjectTitle = styled.h1`
  font-size: 32px;
  position: absolute;
  bottom: 60px;

  @media (max-width: 480px) {
    bottom: 10px
  }
`

export const ProjectDescription = styled.p`
  width: 100%;
  position: absolute;
  bottom: 25px;

  @media (max-width: 480px) {
    display: none;
  }
`