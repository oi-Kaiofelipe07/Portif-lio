import { P } from './style'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  //  quem possui ? é pq é opcional
  // o tipo é opcional, se não for passado, o valor padrão será 'principal'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
