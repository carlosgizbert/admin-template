import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import useAppData from './../../data/hook/useAppData';
import ForcarAutenticacao from './../auth/ForcarAutenticacao';

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

export default function Layout(props: LayoutProps) {

  const { theme } = useAppData()

  return (
    <ForcarAutenticacao>
      <div className={`${theme} flex h-screen w-screen`}>
        <MenuLateral />
        <div className="flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7">
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>
            {props.children}
          </Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  )
}
