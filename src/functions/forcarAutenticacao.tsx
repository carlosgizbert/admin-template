// FORÇAR AUTENTICAÇÃO EM FORMA DE FUNÇÃO

import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import Head from 'next/head';
import useAuth from '../data/hook/useAuth';
import router from 'next/router';

export default function ForcarAutenticacao(jsx) {

  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      // protegendo ainda mais as rotas pelo head
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(!document.cookie?.includes("admin-template-auth")){
              window.location.href = "/autenticacao"
            }
          `
            }}
          />
        </Head>
        {jsx}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} alt="Circulo girando ao carregar conteúdo" />
      </div>
    )
  }

  if (!carregando && usuario?.email) { // se NÃO estiver carregando e promise retornou usuario > mostra conteudo
    return renderizarConteudo()
  } else if (carregando) { // se ESTIVER CARREGANDO > mostra conteudo
    return renderizarCarregando()
  } else { // caso NAO TENHA CARREGAMENTO NEM USUARIO > força tela login
    router.push('/autenticacao')
    return null
  }
}