import Titulo from '../../Components/Titulo'
import Paragrafo from '../../Components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione
      amet reiciendis necessitatibus rerum. Ullam corporis beatae minima culpa
      eum veritatis est totam in officia quidem, autem consequuntur sint iusto.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=oi-Kaiofelipe07&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oi-Kaiofelipe07&layout=compact&langs_count=7&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre
