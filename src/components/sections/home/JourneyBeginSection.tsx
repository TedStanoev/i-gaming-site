import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';

import '@/styles/components/sections/home/JourneyBeginSection.scss';

export default function JourneyBeginSection() {
  return (
    <>
      <div className="journey-wrapper">
        <div id="journey-left-content">
          <h1>Your journey begins!</h1>
        </div>
        <div id="journey-right-content">
          <h1>Keep scrolling</h1>
        </div>
      </div>
      <Image className="journey-sword" src={SwordSrc} alt="sword" />
    </>
  );
}
