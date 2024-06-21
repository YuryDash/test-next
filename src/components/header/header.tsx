import Link from "next/link";
import s from './header.module.scss'
export const Header = () => {
  return (
    <header className={s.wrapper}>
      <Link href={'/'}>Home</Link>
      <Link href={'/posts'}>Posts</Link>
      <Link href={'/about'}>About</Link>
    </header>
  )
}