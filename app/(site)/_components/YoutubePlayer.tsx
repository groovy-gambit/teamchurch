'use client';

import coreUtils from '@/core/application/utils';
import dynamic from 'next/dynamic';

const YouTubePlayer = dynamic(() => import('react-player/lazy/players/YouTube'), { ssr: false });

// import YouTubePlayer from 'react-player/youtube';

export default (props) => {
  return <YouTubePlayer {...props} />;
};
