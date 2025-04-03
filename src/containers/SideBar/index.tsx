import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kaio Felipe</Titulo>
      <Paragrafo tipo="secundario">Oi-Kaiofelipe07</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenharia de Software
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
