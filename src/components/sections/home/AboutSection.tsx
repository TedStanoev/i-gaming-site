import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';

import '@/styles/components/sections/home/_aboutSection.scss';

export default function AboutSection() {
  return (
    <>
      <div className="about_wrapper"></div>
      <Image className="about_sword" src={SwordSrc} alt="sword" />
    </>
  );
}
