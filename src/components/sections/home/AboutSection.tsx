import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';

import '@/styles/components/sections/home/_aboutSection.scss';

export default function AboutSection() {
  return (
    <>
      <div className="about_wrapper">
        <div id="about_left_content">
          <h1>Your journey begins!</h1>
        </div>
        <div id="about_right_content">
          <h1>Keep scrolling</h1>
        </div>
      </div>
      <Image className="about_sword" src={SwordSrc} alt="sword" />
    </>
  );
}
