'use client';

import { ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import '../../../styles/animation/scroll-wrappers/HomeScrollWrapper.scss';
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

    const journey_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.journey_wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: '.journey_wrapper',
      },
    });

    const map_reveal_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#map-reveal-section',
        start: 'top top',
        end: '+=3000',
        scrub: true,
        pin: '#map-reveal-section',
      },
    });

    const cloud_timeline = gsap.timeline({
      repeat: -1,
      ease: 'linear',
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
      .set('.journey_sword', {
        opacity: 1,
      });

    cloud_timeline.to(
      '.map-reveal-cloud',
      {
        x: 2100,
        repeat: -1,
        ease: 'linear',
        stagger: 5,
        duration: 35,
      }
    );

    journey_timeline
      .from('#journey_left_content', {
        x: -200,
        opacity: 0,
        ease: 'power2.in',
      })
      .from(
        '#journey_right_content',
        {
          x: 300,
          opacity: 0,
          ease: 'power2.in',
        },
        '<0'
      );

    journey_timeline
      .to('#journey_left_content', {
        y: -200,
        opacity: 0,
        ease: 'power2.in',
      })
      .to(
        '#journey_right_content',
        {
          y: -500,
          opacity: 0,
          ease: 'power2.in',
        },
        '<0'
      );

    map_reveal_timeline
      .to('.journey_sword', {
        rotateZ: -300,
        opacity: 0,
      })
      .fromTo(
        '.map-reveal-cloud',
        {
          opacity: 0,
          x: -400,
        },
        {
          opacity: 1,
          // x: 300,
          // stagger: {
          //   each: 0,
          //   onStart: function() {
          //     cloudsTweenArr.forEach((tween, index) => {
          //       gsap.set(tween as string, {
          //         x: startXValues[index],
          //       });
          //     });
          //   },
          // },
        }
      )
      .from('#map-reveal-forest', {
        opacity: 0,
      })
      .from(
        '#map-reveal-castle',
        {
          opacity: 0,
        },
        '<0.5'
      )
      .from(
        '#map-reveal-sky',
        {
          opacity: 0,
        },
        '<0.5'
      );

    // map_reveal_timeline.fromTo(
    //   '.map-reveal-cloud',
    //   {
    //     opacity: 0,
    //     stagger: 4,
    //     x: 0,
    //     ease: 'power1.out'
    //   },
    //   {
    //     opacity: 1,
    //     x: 600,
    //     repeat: -1,
    //   },
    // );
  }, []);

  return <div className="home_page">{children}</div>;
}
