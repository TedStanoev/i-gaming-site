'use client';

import { ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import '../../../styles/animation/scroll-wrappers/_homeScrollWrapper.scss';
import { SplitText } from 'gsap/all';

type Props = {
  children: ReactNode;
};

export default function HomeScrollWrapper({ children }: Props) {
  useGSAP(() => {
    const heroFirstText = new SplitText('#hero_title', {
      type: 'lines',
    });
    const scroll_pull_text = new SplitText('#scroll_pull_sword', {
      type: 'lines',
    });

    gsap.from('.hero_left_content', {
      y: 300,
      opacity: 0,
      duration: 0.6,
    });
    gsap.from(heroFirstText.lines, {
      y: 500,
      opacity: 0,
      stagger: 0.5,
      duration: 0.6,
    });

    const hero_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_wrapper',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        pin: '.hero_wrapper',
      },
    });

    const about_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about_wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: '.about_wrapper',
      },
    });

    hero_timeline
      .fromTo(
        '.hero_sword',
        {
          transform: 'rotate(-60deg)',
          ease: 'power1.in',
        },
        {
          transform: 'rotate(-45deg)',
          ease: 'power1.out',
          repeat: 3,
          yoyo: true,
        }
      )
      .to(
        '.hero_right_content',
        {
          x: 200,
        },
        '<0'
      )
      .to(
        '#hero_title',
        {
          y: -300,
          opacity: 0,
        },
        '<0'
      )
      .fromTo(
        '#scroll_pull_sword',
        {
          y: 300,
          opacity: 0,
        },
        {
          y: -300,
          opacity: 1,
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

    hero_timeline
      .to('.hero_boulder', {
        y: 300,
        ease: 'power1.in',
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
      })
      .to(
        scroll_pull_text.lines,
        {
          opacity: 0,
          x: 500,
          stagger: 0.2,
        },
        '<0'
      );

    hero_timeline
      .to('.hero_sword', {
        transform: 'rotate(-45deg)',
        ease: 'power1.in',
      })
      .set('.hero_sword', {
        opacity: 0,
      })
      .set('.about_sword', {
        opacity: 1,
      });

    about_timeline
      .from('#about_left_content', {
        x: -200,
        opacity: 0,
        ease: 'power2.in',
      })
      .from(
        '#about_right_content',
        {
          x: 300,
          opacity: 0,
          ease: 'power2.in',
        },
        '<0'
      );

    about_timeline
      .to('#about_left_content', {
        y: -200,
        opacity: 0,
        ease: 'power2.in',
      })
      .to(
        '#about_right_content',
        {
          y: -500,
          opacity: 0,
          ease: 'power2.in',
        },
        '<0'
      );
  }, []);

  return <div className="home_page">{children}</div>;
}
