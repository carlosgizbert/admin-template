import Conteudo from '../components/template/Conteudo'
import Layout from '../components/template/Layout'

export default function Home() {
  return (
    <Layout titulo="Início" subtitulo="Novidades em breve">
      <Conteudo>
        <h1>Conteudo</h1>
      </Conteudo>
    </Layout>
  )
}
