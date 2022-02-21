import MenuItem from "./MenuItem"
import { IconHome } from '../icons/index'
import { IconSettings } from '../icons/index'
import { IconNotification } from '../icons/index'
import { IconLogout } from '../icons/index'
import Logo from './Logo'
import useAuth from './../../data/hook/useAuth';
import Link from 'next/link';

export default function MenuLateral() {

  const { logout } = useAuth()

  return (
    <aside className="
    flex flex-col
    dark:bg-gray-900
    ">
      <Link href="/" passHref>
        <div className="
      flex flex-col items-center justify-center
      w-20 h-20 
      bg-gradient-to-r from-indigo-500 to-purple-800 cursor-pointer">
          <Logo />
        </div>
      </Link>
      <ul className="flex-grow">
        <MenuItem icon={IconHome} text="Início" url="/" />
        <MenuItem icon={IconSettings} text="Ajustes" url="/ajustes" />
        <MenuItem icon={IconNotification} text="Notificações" url="/notificacoes" />
      </ul>
      <ul>
        <MenuItem icon={IconLogout} text="Sair" className="text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" onClick={() => logout()} />
      </ul>
    </aside>
  )
}
