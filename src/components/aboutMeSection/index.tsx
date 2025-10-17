import * as S from './styles'

import { motion } from 'framer-motion'

import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'


export const AboutMeSection = () => {
  return (
    <S.AboutMeSectionContainer id='SobreMim'>
      <h1>SOBRE NÓS</h1>
      <S.AboutMeSection>
        <S.AboutMeSectionImage  />
        <S.AboutMeSectionDescription>
          <p>Na DevWork Software Solutions, transformamos ideias em soluções digitais eficientes. Somos uma empresa especializada na criação de sites modernos e no desenvolvimento de sistemas personalizados, sempre com foco em desempenho, funcionalidade e experiência do usuário.<br/>

            Nosso objetivo é impulsionar negócios através da tecnologia, oferecendo soluções sob medida para cada cliente. Seja para criar um site institucional, uma loja virtual, um painel administrativo ou um sistema completo de gestão, nossa equipe trabalha com dedicação para entregar resultados profissionais e escaláveis.<br/>

            Combinamos design atrativo, tecnologia atualizada e boas práticas de desenvolvimento para garantir que cada projeto seja único, seguro e preparado para crescer junto com o seu negócio.<br/>
          </p>
        </S.AboutMeSectionDescription>
      </S.AboutMeSection>
      <S.Contacts>
        <h1>Fale Conosco!</h1>
        <S.ContactsListContainer>
          <S.ContactsList>
            <S.ContactsListItem>
              <S.ContactsLinks
                variants={{
                  animation: { rotate: 2, scale: 1.2 }
                }}
                whileHover="animation"
                target='_blank' href="https://www.instagram.com/devwork_sofwaresolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                 <FaInstagram color="#E1306C" size={30}  />
                <p>/DevWork</p>
              </S.ContactsLinks>
            </S.ContactsListItem>
            <S.ContactsListItem>
              <S.ContactsLinks
                variants={{
                  animation: { rotate: -2, scale: 1.2 }
                }}
                whileHover="animation"
                target='_blank' href="https://contate.me/5511921418276">
                <FaWhatsapp color="#E1306C" size={30}  />
                <p>/DevWork Softwere Solutions</p>
              </S.ContactsLinks>
            </S.ContactsListItem>
          </S.ContactsList>
        </S.ContactsListContainer>
      </S.Contacts>
      <S.BackgroundVideo
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.video
          autoPlay
          loop
          muted
        >
          
        </motion.video>
      </S.BackgroundVideo>


    </S.AboutMeSectionContainer>
  )
}
