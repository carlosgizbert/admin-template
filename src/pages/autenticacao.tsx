/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconGoogle, IconWarning } from "../components/icons";
import useAuth from '../data/hook/useAuth'

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [erro, setErro] = useState(null)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { login, loginGoogle, cadastrar } = useAuth()

  async function submeter() {
    try {
      if (modo === 'login') {
        await login(email, senha)
      }
      else {
        await cadastrar(email, senha)
      }
    } catch (e) {
      exibirErro(e?.message ?? 'Erro inesperado')
    }
  }

  function exibirErro(messageErro) {
    setErro(messageErro)
  }

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img className="h-screen w-full object-cover" src="https://source.unsplash.com/random" alt="Imagem tela autenticação" />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center m-10">
        <h1 className="text-xl font-semibold mb-5">
          {modo === 'login' ? 'Entre com sua conta' : 'Criar uma nova conta'}
        </h1>
        {
          erro ? (
            <div className="flex items-center gap-2 h-20 text-white bg-red-500 p-4 mb-4 rounded-md">
              {IconWarning}
              <span>{erro}</span>
            </div>
          ) : false
        }
        <div className="mb-5">
          <AuthInput
            label="Email"
            tipo="email"
            valor={email}
            placeholder="Insira o email"
            obrigatorio
            valorMudou={setEmail}
          />

          <AuthInput
            label="Senha"
            tipo="password"
            valor={senha}
            placeholder="Insira a senha"
            obrigatorio
            valorMudou={setSenha}
          />

        </div>
        <button
          className={`
        w-full
        bg-indigo-500
        hover:bg-indigo-400
        hover:shadow-md
        text-white
        rounded-lg h-16 mb-6
        `}
          onClick={submeter}>{modo === 'login' ? 'Entrar' : 'Cadastrar conta'}
        </button>

        {
          modo === 'login' ? (
            <div>
              <span>Não possui uma conta? </span>
              <span
                className="text-blue-600 cursor-pointer hover:font-medium"
                onClick={() => setModo('cadastro')}
              >Criar conta
              </span>
            </div>

          ) : (
            <div>
              <span>Já possui uma conta? </span>
              <span
                className="text-blue-600 cursor-pointer hover:font-medium"
                onClick={() => setModo('login')}
              >Entrar
              </span>
            </div>

          )
        }
        <hr className="my-6 border-gray-300 w-full" />

        <button
          className={`
          w-full
          bg-white
          border-2
          hover:bg-gray-100
          hover:shadow-md
          text-gray-600
          rounded-lg px-2 py-4
          flex
          justify-center
          gap-4
          `}
          onClick={loginGoogle}>
          {IconGoogle}
          Entrar com Google
        </button>

      </div>
    </div>
  )
}