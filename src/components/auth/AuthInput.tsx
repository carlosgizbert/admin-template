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
    <div className="flex flex-col mb-5">
      <label htmlFor="" className="mb-1">{props.label}</label>
      <input
        className="h-16 p-3 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none"
        type={props.tipo ?? 'text'}
        value={props.valor}
        placeholder={props.placeholder}
        required={props.obrigatorio ?? false}
        onChange={e => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}