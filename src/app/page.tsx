import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import HomeScrollWrapper from '@/components/animation/scroll-wrappers/HomeScrollWrapper';

import '../styles/app/_page.scss';

export default function Home() {
  return (
    <HomeScrollWrapper>
      <HeroSection />
      <AboutSection />
      <div style={{ height: '100vh' }}></div>
    </HomeScrollWrapper>
  );
}
