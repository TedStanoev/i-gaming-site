'use client';

import gsap from 'gsap';
import { ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

import '../../../styles/animation/scroll-wrappers/HomeScrollWrapper.scss';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export default function HomeScrollWrapper({ children }: Props) {
  useGSAP(() => {
    const hero_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-wrapper',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        pin: '.hero-wrapper',
      },
    });

    const journey_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.journey-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: '.journey-wrapper',
      },
    });

    const map_reveal_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#map-reveal-section',
        start: 'top top',
        end: '+=6200',
        scrub: true,
        pin: '#map-reveal-section',
      },
    });

    const cloud_timeline = gsap.timeline({
      repeat: -1,
      ease: 'linear',
    });
    const fire_visitor_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#fire-visitor-section',
        start: 'top 0',
        end: '+=1500',
        scrub: true,
        pin: true,
      },
    });

    const heroTitleSplit = new SplitText('#hero-title', {
      type: 'lines',
    });
    const pullSwordLeftTitleSplit = new SplitText('#hero-pull-sword-left', {
      type: 'words',
    });
    const pullSwordRightTitleSplit = new SplitText('#hero-pull-sword-right', {
      type: 'words',
    });
    const journeyLeftTitleSplit = new SplitText('#journey-left-content', {
      type: 'words',
    });
    const journeyRightTitleSplit = new SplitText('#journey-right-content', {
      type: 'words',
    });
    const heirTitleSplit = new SplitText('#map-reveal-heir-title', {
      type: 'chars',
    });
    const dawnTitleSplit = new SplitText('#map-reveal-dawn-title', {
      type: 'words',
    });
    const visitorTitleSplit = new SplitText('#fire-visitor-stranger-title', {
      type: 'words',
    });
    const visitorSitsTitleSplit = new SplitText(
      '#fire-visitor-stranger-sits-title',
      {
        type: 'words',
      }
    );

    gsap.from('.hero-front-content', {
      y: 300,
      opacity: 0,
      duration: 0.6,
    });

    gsap
      .timeline()
      .from(heroTitleSplit.lines[0], {
        x: 1500,
        duration: 0.6,
        fontStyle: 'italic',
      })
      .fromTo(
        heroTitleSplit.lines[1],
        {
          x: -2500,
          duration: 0.6,
          fontStyle: 'italic',
        },
        { x: -100, fontStyle: 'normal' },
        '<0.5'
      )
      .fromTo(
        heroTitleSplit.lines[2],
        {
          x: 1500,
          duration: 0.6,
          fontStyle: 'italic',
        },
        {
          x: 100,
          fontStyle: 'normal',
        },
        '<0.5'
      );

    hero_timeline
      // .to(
      //   '.hero-back-content',
      //   {
      //     x: 200,
      //   },
      //   '<0'
      // )
      .to(
        heroTitleSplit.lines[0],
        {
          x: -300,
          opacity: 0,
        },
        '<0'
      )
      .to(
        heroTitleSplit.lines[1],
        {
          x: 300,
          opacity: 0,
        },
        '<0'
      )
      .to(
        heroTitleSplit.lines[2],
        {
          x: -300,
          opacity: 0,
        },
        '<0'
      )
      .to(
        '.hero-sword',
        {
          left: '35%',
        },
        '<0'
      )
      .to(
        '.hero-boulder',
        {
          left: '35%',
        },
        '<0'
      )
      .fromTo(
        pullSwordLeftTitleSplit.words,
        {
          x: -1500,
          opacity: 0.5,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.7,
        },
        '<0.5'
      )
      .fromTo(
        pullSwordRightTitleSplit.words,
        {
          x: -1500,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.7,
        },
        '<0.7'
      )
      .fromTo(
        '.hero-sword',
        {
          transform: 'rotate(-60deg)',
          ease: 'power1.in',
        },
        {
          transform: 'rotate(-45deg)',
          ease: 'power1.out',
          repeat: 5,
          yoyo: true,
        }
      )
      .to(
        pullSwordLeftTitleSplit.words,
        {
          transform: 'skew(-10deg)',
          ease: 'power1.out',
          repeat: 5,
          yoyo: true,
        },
        '<0'
      )
      .to(
        pullSwordRightTitleSplit.words,
        {
          transform: 'skew(10deg)',
          ease: 'power1.out',
          repeat: 5,
          yoyo: true,
        },
        '<0'
      );

    hero_timeline
      .to('.hero-boulder', {
        y: 300,
        ease: 'power1.in',
      })
      .to(
        '.hero-sword',
        {
          y: -50,
          x: -50,
          ease: 'power1.in',
        },
        '<0'
      )
      .to(
        pullSwordLeftTitleSplit.words,
        {
          opacity: 0,
          x: 500,
          stagger: 0.2,
        },
        '<0'
      )
      .to(
        pullSwordRightTitleSplit.words,
        {
          opacity: 0,
          x: 500,
          stagger: 0.2,
        },
        '<0'
      )
      .to('.hero-boulder', {
        opacity: 0,
        ease: 'power1.inOut',
      });

    hero_timeline
      .to('.hero-sword', {
        transform: 'rotate(-45deg)',
        ease: 'power1.in',
      })
      .set('.hero-sword', {
        opacity: 0,
      })
      .set('.journey-sword', {
        opacity: 1,
      });

    cloud_timeline.to('.map-reveal-cloud', {
      x: 2100,
      repeat: -1,
      ease: 'linear',
      stagger: 5,
      duration: 35,
    });

    journey_timeline
      .from(journeyLeftTitleSplit.words, {
        x: -200,
        opacity: 0,
        ease: 'power2.in',
        stagger: 0.2,
      })
      .from(
        journeyRightTitleSplit.words,
        {
          x: 300,
          opacity: 0,
          ease: 'power2.in',
          stagger: 0.2,
        },
      );

    journey_timeline
      .to('#journey-left-content', {
        y: -200,
        opacity: 0,
        ease: 'power2.in',
      })
      .to(
        '#journey-right-content',
        {
          y: -500,
          opacity: 0,
          ease: 'power2.in',
        },
        '<0'
      );

    map_reveal_timeline
      .to('.journey-sword', {
        rotateZ: -300,
        opacity: 0,
      })
      .from(heirTitleSplit.chars, {
        opacity: 0,
        stagger: 0.1,
      })
      .fromTo(
        '.map-reveal-cloud',
        {
          opacity: 0,
          x: -400,
        },
        {
          opacity: 1,
        }
      )
      .from('#map-reveal-forest', {
        opacity: 0,
      })
      .from(
        '#map-reveal-sky',
        {
          opacity: 0,
        },
        '<1'
      )
      .to(
        heirTitleSplit.chars,
        {
          color: '#D4AF37',
        },
        '<0'
      )
      .to(
        heirTitleSplit.chars,
        {
          opacity: 0,
          stagger: 0.1,
        },
        '<1.5'
      )
      .fromTo(
        dawnTitleSplit.words,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.3,
        },
        '<0.5'
      )
      .to(
        '#map-reveal-sky',
        {
          opacity: 0,
        },
        '<0.8'
      )
      .to(
        '#map-reveal-dark-sky',
        {
          opacity: 1,
        },
        '<0.5'
      );

    fire_visitor_timeline
      .fromTo(
        '#fire-visitor-video',
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '<0.5'
      )
      .from(visitorTitleSplit.words, {
        opacity: 0,
        stagger: 0.3,
      })
      .from(visitorSitsTitleSplit.words, {
        opacity: 0,
        stagger: 0.3,
      })
      .to(visitorTitleSplit.words, {
        opacity: 0,
        stagger: 0.3,
      })
      .to(visitorSitsTitleSplit.words, {
        opacity: 0,
        stagger: 0.3,
      })
      .fromTo(
        '#fire-visitor-conversation-section',
        {
          opacity: 0,
          x: '120vw',
        },
        {
          opacity: 1,
          x: 0,
        }
      );
  }, []);

  return <div id="home_page">{children}</div>;
}
