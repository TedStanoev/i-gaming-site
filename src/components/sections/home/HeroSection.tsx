'use client';

import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';
import BoulderSrc from '@/assets/boulder-nobg.png';

import '@/styles/components/sections/home/HeroSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {

  return (
    <div className="hero_wrapper">
      <div className="hero_left_content">
        <Image className="hero_sword" src={SwordSrc} alt="sword" />
        <Image className="hero_boulder" src={BoulderSrc} alt="boulder" />
      </div>
      <div className="hero_right_content">
        <h1 id="hero_title">Are you ready to conquer?</h1>
        <h1 id="scroll_pull_sword">Scroll down to pull the sword</h1>
      </div>
    </div>
  );
}
