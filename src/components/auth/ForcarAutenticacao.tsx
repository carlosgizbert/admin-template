import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuth from './../../data/hook/useAuth';
import router from 'next/router';

export default function ForcarAutenticacao(props) {

  const { usuario, carregando } = useAuth()

  function renderizarConteudo() {
    return (
      <>
        {props.children}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div className={`flex 
      flex justify-center items-center h-screen`}>
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