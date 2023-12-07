'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default (props: { url: string }) => {
  return <ReactPlayer width="100%" controls={true} url={props.url} />;
};
