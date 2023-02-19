import React, { FC, useEffect, useRef } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
};

const LazyImage: FC<LazyImageProps> = ({ src, alt }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const img = imageRef.current;
          if (img) {
            img.src = img.dataset.src as string;
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.01,
      }
    );
    observer.observe(imageRef.current as HTMLImageElement);
  }, []);

  return <img ref={imageRef} alt={alt} data-src={src} />;
};

export default LazyImage;
