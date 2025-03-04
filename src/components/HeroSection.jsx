import { useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Проверяем, является ли устройство мобильным
  const checkIsMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Воспроизведение видео
  const playVideo = (videoElement) => {
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md lg:hover:opacity-70 lg:transition-all lg:duration-200"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <div className="relative w-1/2 mx-2 my-4">
          <video
            controls={isMobile}
            muted
            loop
            playsInline
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
            ref={(el) => {
              if (el && !isMobile) {
                el.play();
              }
            }}
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isMobile && (
            <button
              onClick={() => playVideo(document.querySelector("video"))}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-md"
            >
              Play
            </button>
          )}
        </div>
        <div className="relative w-1/2 mx-2 my-4">
          <video
            controls={isMobile}
            muted
            playsInline
            loop
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
            ref={(el) => {
              if (el && !isMobile) {
                el.play();
              }
            }}
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isMobile && (
            <button
              onClick={() => playVideo(document.querySelectorAll("video")[1])}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-md"
            >
              Play
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
