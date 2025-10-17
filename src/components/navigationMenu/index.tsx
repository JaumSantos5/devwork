import { useState } from 'react'
import * as S from './styles'

const sectionItem = [
  {id: 'Inicio', name: 'inicio'},
  {id: 'Projetos', name: 'projetos'},
  {id: 'SobreMim', name: 'sobre nós'}
]

export const NavigationMenu = () => {
  const [itemIsActive, setItemIsActive] = useState(sectionItem[0].id);
  
    const activeItemNavigationByScroll = () => {
    for (let i = sectionItem.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionItem[i].id)
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setItemIsActive(sectionItem[i].id);
        }
      }
    }
  }
  window.addEventListener('scroll', activeItemNavigationByScroll)

  return (
    <S.NavigationMenu
    variants={{
      close: { opacity: 0, x: 0},
      open: {opacity: 1, x: 0}
    }}
    initial="close"
    animate="open"
    transition={{duration: 0.8, ease: 'backOut'}}
    >
    <S.NavigationMenuList>      
      {sectionItem.map((item) => (
        <S.NavigationMenuListItem key={item.id}>
          {itemIsActive === item.id && (<S.ListItemLinkBackground layoutId='active-pill' transition={{duration: 0.4}}/>)}
          <S.ListItemLink 
            onClick={() => setItemIsActive(item.id)}
            $isActive={itemIsActive === item.id} 
            to={`${item.id}`}
          >
            {item.name}
          </S.ListItemLink>
        </S.NavigationMenuListItem>        
      ))}
    </S.NavigationMenuList>
  </S.NavigationMenu>
  )
}