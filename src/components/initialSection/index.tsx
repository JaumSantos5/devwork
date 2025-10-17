import * as S from './styles'
import computador from '../../assets/logodev.png'
import github from 'devicon/icons/github/github-original.svg'
import react from 'devicon/icons/react/react-original-wordmark.svg'
import motionframer from 'devicon/icons/framermotion/framermotion-original.svg'
import java from 'devicon/icons/java/java-original-wordmark.svg'
import javaScript from 'devicon/icons/javascript/javascript-plain.svg'
import typeScript from 'devicon/icons/typescript/typescript-plain.svg'
import nodeJs from 'devicon/icons/nodejs/nodejs-original.svg'
import tailwindcss from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import sass from 'devicon/icons/sass/sass-original.svg'
import { Variants, motion } from 'framer-motion'

const logoVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren:  0.6,
      duration: 0.4,
    }
  }
}

const imageItemRight: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    }
  }
}

const imageItemLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}


export const InitialSection = () => {
  return (
    <>
    <S.StyledSection id="Inicio" className='container'>
      <S.ProfileImage>
        <motion.img 
        src={computador}
        alt="logo"
        variants={{
          initial: {x: -80, opacity: 0},
          animation: {x: 0, opacity: 1}
        }}
        transition={{duration: 1, delay: 0.2}}
        initial="initial"
        animate="animation"
        />
      {/* <S.RoleText>
          <motion.h1
          variants={{
            initial: {x: 80, opacity: 0},
            animation: {x: 0, opacity: 1}
          }}
          transition={{duration: 2, delay: 0.2}}
          initial="initial"
          animate="animation"
          >
          Desenvolvedor FullStack
          </motion.h1>
      </S.RoleText> */}
      </S.ProfileImage>      
      <S.DescriptionText>
        <motion.h2
        variants={{
          initial: {x: 120, opacity: 0},
          animation: {x: 0, opacity: 1}
        }}
        transition={{duration: 0.6, delay: 0.6}}
        initial="initial"
        animate="animation"
        >SEJA BEM VINDO AO NOSSO PORTFÓLIO</motion.h2>
        <motion.p
        variants={{
          initial: {x:100, opacity: 0},
          animation: {x: 0, opacity: 1}
        }}
        transition={{duration: 0.6, delay: 1}}
        initial="initial"
        animate="animation"
        >Nós somos a DevWork Software Solutions e estamos comprometidos em trazer resultados para nossos clientes. </motion.p>
        <S.TechnologiesIcons
          variants={logoVariant}
          initial="hidden"
          animate="show"
        >
          <motion.img
          whileHover={{scale: 1.2, y: -10}}
          variants={imageItemLeft}          
          src={github} alt="Github Icon" />
          <motion.img 
          whileHover={{scale: 1.2, y: 10}}
          variants={imageItemRight}
          src={react} alt="React Icon" />
          <motion.img 
          whileHover={{scale: 1.2, y: -10}}
          variants={imageItemLeft}
          src={motionframer} alt="Sass Icon" />
          <motion.img 
          whileHover={{scale: 1.2, y: 10}}
          variants={imageItemRight}
          src={java} alt="Java Icon" />
          <motion.img
          whileHover={{scale: 1.2, y: -10}}
          variants={imageItemLeft}
          src={javaScript} alt="JavaScript Icon" />
          <motion.img 
          whileHover={{scale: 1.2, y: 10}}
          variants={imageItemRight}
          src={typeScript} alt="TypeScript Icon" />
          <motion.img 
          whileHover={{scale: 1.2, y: -10}}
          variants={imageItemLeft}
          src={nodeJs} alt="NodeJS Icon" />
          <motion.img
          whileHover={{scale: 1.2, y: 10}}
          variants={imageItemRight}
          src={tailwindcss} alt="Tailwindcss Icon" />
          <motion.img
          whileHover={{scale: 1.2, y: -10}}
          variants={imageItemLeft}
          src={sass} alt="Sass Icon" />
        </S.TechnologiesIcons>
      </S.DescriptionText>
    </S.StyledSection>
    </>

  )
}
