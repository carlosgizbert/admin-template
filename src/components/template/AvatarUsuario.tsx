import Link from "next/link";
import useAuth from './../../data/hook/useAuth';
import Image from 'next/image'

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()
  return (
    <Link href="/perfil" passHref>
      <img
        className="cursor-pointer h-16 w-16 rounded-full hover:shadow-md"
        src={usuario?.imagemUrl ?? 'https://img2.gratispng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg'}
        alt="Imagem do usuário"
        width="80"
        height="80" />
    </Link>
  )
}