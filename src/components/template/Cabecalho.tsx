import Titulo from './Titulo'
import BotaoAlternarTema from './BotaoAlternarTema';
import useAppData from './../../data/hook/useAppData';
import AvatarUsuario from './AvatarUsuario';

interface CabecalhoProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Cabecalho(props: CabecalhoProps) {

  const { theme, changeTheme } = useAppData()

  return (
    <div className='flex items-center'>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className='flex flex-grow justify-end items-center gap-8'>
        <BotaoAlternarTema tema={theme} changeTheme={changeTheme} />
        <AvatarUsuario />
      </div>
    </div>
  )
}
