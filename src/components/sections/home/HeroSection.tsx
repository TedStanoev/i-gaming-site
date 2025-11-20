'use client';

import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

import SwordSrc from '@/assets/sword.png';
import BoulderSrc from '@/assets/boulder-nobg.png';

import '@/styles/components/sections/home/_heroSection.scss';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useGSAP(() => {
    gsap.from('.hero_left_content', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from('.hero_right_content', {
      scale: 0,
      opacity: 0,
      duration: 0.6,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_wrapper',
        start: 'top top',
        end: '+2000',
        scrub: true,
        pin: '.hero_wrapper',
      },
    });

    timeline
      .fromTo(
        '.hero_sword',
        {
          transform: 'rotate(-60deg)',
          ease: 'power1.in',
          scale: 1,
        },
        {
          transform: 'rotate(-45deg)',
          ease: 'power1.out',
          scale: 1,
          repeat: 3,
          yoyo: true,
        }
      )
      .to(
        '.hero_right_content',
        {
          opacity: 0,
          x: 200,
          scrub: 0.5,
        },
        '<0'
      )
      .to(
        '.hero_sword',
        {
          left: '78%',
        },
        '<0'
      )
      .to(
        '.hero_boulder',
        {
          left: '78%',
        },
        '<0'
      );

    timeline
      .to('.hero_boulder', {
        y: 300,
        ease: 'power1.in',
        scrub: 0.2,
      })
      .to(
        '.hero_sword',
        {
          y: -50,
          x: -50,
          ease: 'power1.in',
        },
        '<0'
      )
      .to('.hero_boulder', {
        opacity: 0,
        ease: 'power1.inOut',
      });

    timeline
      .to('.hero_sword', {
        top: '20%',
        transform: 'rotate(-45deg)',
        ease: 'power1.in',
      })
      .to('.hero_sword', {
        top: '15%',
      })
      .set('.hero_sword', {
        opacity: 0,
      })
      .set('.about_sword', {
        opacity: 1,
      });
  }, []);

  return (
    <div className="hero_wrapper">
      <div className="hero_left_content">
        <Image className="hero_sword" src={SwordSrc} alt="sword" />
        <Image className="hero_boulder" src={BoulderSrc} alt="boulder" />
      </div>
      <div className="hero_right_content">
        <h1>Are you ready to conquer?</h1>
      </div>
    </div>
  );
}
