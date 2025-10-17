import {Typewriter,} from "react-simple-typewriter"
import * as S from "./styles"
import { useState } from "react"
import { NavigationMenu } from "../navigationMenu"
import { Variants, motion } from "framer-motion"


export const Header = () => {
  const [icons, setIcons] = useState(false)
  const [iconType, setIconType] = useState(false)

  function switchIcons () {
    const text = document.getElementById("header-text")
    setIcons(true)
    if (text?.textContent === '<R4NP3R />') {
      setIconType(true)
    } else {
      setIconType(false)
    }
  }

  const headerTitleMotion: Variants = {
    animation: {scale: 1.1, y: 5},
  }


  return (
    <S.Header className="container">
      <S.HeaderText 
      variants={{
        hidden: {
          y: -120
        },
        show: {
          y: 0
        }
      }}
      transition={{duration: 0.8, ease: "circIn"}}
      initial="hidden"
      animate="show"
      id="header-text" 
      $iconIsactive={icons}>
      <p>{"<"}</p>
      {iconType ? 
      <motion.a
      variants={headerTitleMotion}
      whileHover="animation"
      target="_blank" href="https://www.instagram.com/devwork_sofwaresolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <Typewriter
        words={['DevWork', 'Software Solutions']}
        loop={true}
        delaySpeed={10000}
        deleteSpeed={40}
        onDelay={switchIcons}
        onDelete={() => setIcons(false)}
        />
      
      </motion.a> 
      : 
      <motion.a 
      variants={headerTitleMotion}
      whileHover="animation"
      target="_blank" href="https://www.instagram.com/devwork_sofwaresolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <Typewriter
        words={['DevWork', 'Software Solutions']}
        loop={true}
        delaySpeed={5000}
        deleteSpeed={40}
        onDelay={switchIcons}
        onDelete={() => setIcons(false)}
        />
        
      </motion.a>
      }
      <p>{"/>"}</p>
    </S.HeaderText>
    <NavigationMenu/>
    </S.Header>
  )
}