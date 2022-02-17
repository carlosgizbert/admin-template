import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icon: any
  className?: string
  onClick?: (evento: any) => void //Recebe evento de qualquer tipo e retorna nada(void)
}

export default function MenuItem(props: MenuItemProps) {

  const RenderLink = () => {
    return (
      <a className={`
      ${props.className} 
      flex flex-col justify-center items-center 
      h-20 w-20 
      text-gray-600 dark:text-gray-200 
      dark:hover:text-gray-600`}>
        {props.icon}
        <span className="text-xs font-light mt-2">
          {props.text}
        </span>
      </a>
    )
  }

  return (
    <li onClick={props.onClick} className="hover:bg-gray-100 cursor-pointer" >
      {props.url ? (
        <Link href={props.url} passHref>
          {RenderLink()}
        </Link>
      ) : RenderLink()
      }
    </li>
  )
}