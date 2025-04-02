import Projetos from './containers/Projetos'
import SideBar from './containers/SideBar'
import Sobre from './containers/Sobre'
import GlobalStyle, { Container } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
