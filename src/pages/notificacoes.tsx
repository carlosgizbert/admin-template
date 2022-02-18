import Layout from '../components/template/Layout'
import Conteudo from './../components/template/Conteudo';
import useAppData from './../data/hook/useAppData';

export default function Notificacoes() {

  const { changeTheme } = useAppData()

  return (
    <Layout titulo="Notificacoes" subtitulo="Descrição Notificacoes">
      <Conteudo>
        <h3>Conteudo</h3>
      </Conteudo>
    </Layout>
  )
}
