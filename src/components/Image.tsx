"use client";

import { IKImage } from "imagekitio-next";

type ImageProps = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt, className, tr }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={`/antisocial/${path}`}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
