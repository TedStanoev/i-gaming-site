import HomeScrollWrapper from '@/components/animation/scroll-wrappers/HomeScrollWrapper';
import HeroSection from '@/components/sections/home/HeroSection';
import JourneyBeginSection from '@/components/sections/home/JourneyBeginSection';
import MapRevealSection from '@/components/sections/home/MapRevealSection';
import FireVisitorSection from '@/components/sections/home/FireVisitorSection';

import '../styles/app/page.scss';

export default function Home() {
  return (
    <HomeScrollWrapper>
      <HeroSection />
      <JourneyBeginSection />
      <MapRevealSection />
      <FireVisitorSection />
      <div style={{ height: '100vh' }}></div>
    </HomeScrollWrapper>
  );
}
