import Link from 'next/link';
import Logo from '../Logo';

import '@/styles/components/layout/Header.scss';

export default function Header() {
  return (
    <nav className="navbar">
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/company">Barracks</Link>
        </li>
        <li>
          <Link href="/gossip">Town</Link>
        </li>
        <li>
          <Link href="/send-raven">Send a raven</Link>
        </li>
      </ul>
    </nav>
  );
}
