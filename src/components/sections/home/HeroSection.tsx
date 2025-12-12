'use client';

import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';
import BoulderSrc from '@/assets/boulder-nobg.png';

import '@/styles/components/sections/home/HeroSection.scss';

export default function HeroSection() {

  return (
    <div className="hero-wrapper">
      <div className="hero-front-content">
        <Image className="hero-sword" src={SwordSrc} alt="sword" />
        <Image className="hero-boulder" src={BoulderSrc} alt="boulder" />
      </div>
      <div className="hero-back-content">
        <h1 id="hero-title">Are you ready to conquer?</h1>
        <h1 id="hero-pull-sword-left">Scroll to the</h1>
        <h1 id="hero-pull-sword-right">down pull sword</h1>
      </div>
    </div>
  );
}
