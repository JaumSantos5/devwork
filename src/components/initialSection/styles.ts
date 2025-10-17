import { motion } from "framer-motion";
import styled from "styled-components";


export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  padding-left: 180px;

  @media (max-width: 480px) {
    padding: 0;
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
  }
`



export const ProfileImage = styled.div`
  width: 300px;
  img {
    margin: 15px 0px;
    width: 550px;
    padding-bottom: 50px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
    width: 350px;
    }

  }
`


export const RoleText = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-weight: bold;  

  h1 {
    margin-right: 4px;
    font-size: 32px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
      text-align: center;      
    }

  }
`

export const DescriptionText = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 25%;

  h2 {
    margin-top: -100px;
    font-size: 42px;
  }

  p {
    font-size: 28px;
    font-weight: 400;
    text-align: left;
  }

  @media (max-width: 768px) {

    width: 100%;
    margin-left:0%;
    padding: 10px;

    h2 {      
      font-size: 20px;
       text-align: left;
     


    }

    p {
      width: 90%;
      font-size: 16px;
        text-align: left;
          margin: 10% 0 ;


    }

  }

`

export const TechnologiesIcons = styled(motion.div)`
  width: 100%;
  margin-top: 20px;
  display: flex;

  img {
    margin-left: 8px;
    width: 60px;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;

    img {
    
    width: 30px;
  }
  }
`
