import styled from 'styled-components'

type BotaoProps = {
  Principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.Principal ? 'blue' : 'green')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <div>
      <h1>Teste</h1>
      <Botao Principal>Enviar</Botao>
      <Botao Principal={false} fontSize="14px">
        Cancelar
      </Botao>
      <BotaoPerigo as="a" Principal>
        <span>Não clique</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste
