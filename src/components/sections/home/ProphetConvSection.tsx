import Image from 'next/image';

import ProphetImgSrc from '@/assets/hooded-stranger-close.jpg';

import '@/styles/components/sections/home/ProphetConvSection.scss';

export default function ProphetConvSection() {
  return (
    <div id="prophet-conversation-wrapper">
      <div id="prophet-conversation-section">
        <div id="prophet-conversation-part-one">
          <Image
            id="prophet-conversation-image"
            src={ProphetImgSrc}
            alt="prophet-close"
          />
          <div id="prophet-conversation-inner-container">
            <h1 id="prophet-conversation-text-line-one">
              I am the priest from the temple, here to warn you of the dangers ahead
            </h1>
            {/* <h1 id="prophet-conversation-text-line-two">
              I am here to warn you
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}
