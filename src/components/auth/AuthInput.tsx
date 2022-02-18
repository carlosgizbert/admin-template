interface AuthInputProps {
  label: string
  valor: any
  placeholder?: string
  obrigatorio?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou?: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor=""></label>
      <input
        className="h-10 p-3"
        type={props.tipo ?? 'text'}
        value={props.valor}
        placeholder={props.placeholder}
        required={props.obrigatorio ?? false}
        onChange={e => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}