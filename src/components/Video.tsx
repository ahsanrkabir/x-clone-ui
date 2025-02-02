"use client";

import { IKVideo } from "imagekitio-next";

type VideoProps = {
  path: string;
  className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ path, className }: VideoProps) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      transformation={[
        { width: "1920", height: "1080", q: "90" },
        // { raw: "l-text,i-Antisocial,fs-100,co-white,l-end" },
      ]}
      controls
      className={className}
    />
  );
};

export default Video;
