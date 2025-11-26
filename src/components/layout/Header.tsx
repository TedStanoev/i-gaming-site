import Link from 'next/link';
import Logo from '../Logo';

import '@/styles/components/layout/Header.scss';

export default function Header() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>
          <Link href="/company">Company</Link>
        </li>
        <li>
          <Link href="/company">Games</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
