'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import '@/styles/components/sections/home/FireVisitorSection.scss';

export default function FireVisitorSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!videoRef.current) {
      console.log('video ref is null', videoRef.current);
      return;
    }

    const video = videoRef.current;
    const scrollData = { frame: 0 };

    video.onloadedmetadata = () => {
      gsap.to(scrollData, {
        scrollTrigger: {
          trigger: '#fire-visitor-wrapper',
          start: 'top -1500',
          end: 'bottom bottom',
          scrub: true,
        },
        frame: video.duration,
        onUpdate: () => {
          video.currentTime = scrollData.frame;
        },
      });
    };
  }, []);

  return (
    <>
      <div id="fire-visitor-wrapper">
        <div id="fire-visitor-section">
          <h1 id="fire-visitor-stranger-title">
            A hooded stranger approaches you...
          </h1>
          <h1 id="fire-visitor-stranger-sits-title">
            He sits by the fire, looking in the distance
          </h1>
        </div>
        <div id="fire-visitor-conversation-section">
          <div
            className="fire-visitor-bubble bg-purple"
            id="fire-visitor-first-bubble"
          >
            {`You finally arrived...\nThe prophecy spoke of you.`}
          </div>
          <div
            className="fire-visitor-bubble bg-blue"
            id="fire-visitor-second-bubble"
          >
            Who are you?
          </div>
        </div>
      </div>
      {createPortal(
        <video
          ref={videoRef}
          id="fire-visitor-video"
          src="/fire-visitor-smooth.mp4"
          preload="auto"
          playsInline
          muted
        />,
        document.body
      )}
    </>
  );
}
