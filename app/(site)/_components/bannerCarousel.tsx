'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { wrap } from 'popmotion';
import { Banner } from '@/sanity/types/types';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const builder = imageUrlBuilder(client);

export default function BannerCarousel({ images }: { images: Banner[] }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const content = (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute h-full w-full overflow-hidden rounded-lg object-cover"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            alt={images[imageIndex].image.alt}
            src={builder.image(images[imageIndex].image).url()}
            className={`object-cover${images[imageIndex].anchor === 'left' ? ' object-left' : ''}${
              images[imageIndex].anchor === 'right' ? ' object-right' : ''
            }`}
            fill
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute right-4 top-[50%-20px] z-10 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-white text-lg font-bold"
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className="absolute left-4 top-[50%-20px] z-10 flex h-10 w-10 scale-[-1] cursor-pointer select-none items-center justify-center rounded-full bg-white text-lg font-bold"
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div>
    </>
  );

  // TODO: ADD Link wrapper to the reference
  if (images[imageIndex].linkTo) {
    return content;
  }

  return content;
}
