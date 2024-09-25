"use client";
import Video from "next-video";

export default function VideoComponent(source) {
  return (
    <Video
      src={
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      }
    />
  );
}
