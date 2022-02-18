import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div>
      <div>Autenticação</div>
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
  )
}