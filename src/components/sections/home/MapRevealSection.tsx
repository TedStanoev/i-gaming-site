import Image from 'next/image';

import SkySrc from '@/assets/forest-assets/2/1.png';
import ForestSrc from '@/assets/forest-assets/2/2.png';
import CastleSrc from '@/assets/castle-sillouhette.png';
import CloudShapeSrc from "@/assets/PNG/Clouds_white/Shape7/cloud_shape7_2.png"
import CloudSrc from "@/assets/PNG/Clouds_white/Shape2/cloud_shape2_1.png"
import Cloud2Src from "@/assets/PNG/Clouds_white/Shape2/cloud_shape2_2.png"
import Cloud3Src from "@/assets/PNG/Clouds_white/Shape2/cloud_shape2_3.png"

import '@/styles/components/sections/home/MapRevealSection.scss';

export default function MapRevealSection() {
  return (
    <div id="map-reveal-wrapper">
      <div id="map-reveal-section">
        <h1 id="map-reveal-heir-title">A kingdom long awaits its heir...</h1>
        <Image id="map-reveal-sky" src={SkySrc} alt="sky" />
        <Image id="map-reveal-forest" src={ForestSrc} alt="forest" />
        <Image id="map-reveal-castle" src={CastleSrc} alt="castle" />
        <Image className="map-reveal-cloud" src={CloudSrc} alt="cloud" />
        <Image className="map-reveal-cloud" src={Cloud2Src} alt="cloud-2" />
        <Image className="map-reveal-cloud" src={Cloud3Src} alt="cloud-3" />
        <Image className="map-reveal-cloud" src={CloudSrc} alt="cloud" />
        <Image className="map-reveal-cloud" src={Cloud3Src} alt="cloud-3" />
        <Image className="map-reveal-cloud" src={Cloud2Src} alt="cloud-2" />
        <Image className="map-reveal-cloud" src={CloudShapeSrc} alt="cloud-shape" />
      </div>
    </div>
  );
}
