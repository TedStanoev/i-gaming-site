import Image from "next/image";

import '@/styles/components/logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Image src="crown.svg" alt="crown" width="40" height="40" />
      <span>KingBets</span>
    </div>
  );
}
