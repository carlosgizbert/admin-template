import firebase from '../../firebase/config'
import { createContext, useEffect, useState } from 'react';
import Usuario from '../../model/Usuario';
import router from 'next/router';
import Cookies from 'js-cookie'

interface AuthContextProps {
  usuario?: Usuario
  carregando?: boolean
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template-auth', logado, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}


export function AuthProvider(props) {

  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>(null)

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario)
      gerenciarCookie(true)
      setCarregando(false)
      return usuario.email
    } else {
      gerenciarCookie(false)
      setCarregando(false)
      return false
    }
  }

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    configurarSessao(resp.user)
    router.push('/')
  }

  async function logout() {
    try {
      setCarregando(true)
      await firebase.auth().signOut()
      await configurarSessao(null)
    } finally {
      setCarregando(false)
      router.push('/autenticacao')
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) { // caso usuario logou em algum momento, obtem usuário de uma sessão antiga, caso não, ele nao tenta obter usuário
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar()
    } else {
      setCarregando(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      carregando,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext