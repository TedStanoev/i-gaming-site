import gsap from 'gsap';

import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';

import '../styles/app/_page.scss';

export default function Home() {
  return (
    <div className="home_page">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
