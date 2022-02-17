import MenuItem from "./MenuItem"
import { IconHome } from '../icons/index'
import { IconSettings } from '../icons/index'
import { IconNotification } from '../icons/index'
import { IconLogout } from '../icons/index'
import Logo from './Logo'

export default function MenuLateral() {
  return (
    <aside className="
    flex flex-col
    dark:bg-gray-900
    ">
      <div className="
      flex flex-col items-center justify-center
      w-20 h-20 
      bg-gradient-to-r from-indigo-500 to-purple-800">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icon={IconHome} text="Início" url="/" />
        <MenuItem icon={IconSettings} text="Ajustes" url="/ajustes" />
        <MenuItem icon={IconNotification} text="Notificações" url="/notificacoes" />
      </ul>
      <ul>
        <MenuItem icon={IconLogout} text="Sair" className="text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" onClick={() => console.log('Logout')} />
      </ul>
    </aside>
  )
}