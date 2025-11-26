import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';

import '@/styles/components/sections/home/JourneyBeginSection.scss';

export default function JourneyBeginSection() {
  return (
    <>
      <div className="journey_wrapper">
        <div id="journey_left_content">
          <h1>Your journey begins!</h1>
        </div>
        <div id="journey_right_content">
          <h1>Keep scrolling</h1>
        </div>
      </div>
      <Image className="journey_sword" src={SwordSrc} alt="sword" />
    </>
  );
}
