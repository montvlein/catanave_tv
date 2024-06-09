
import Link from "next/link";
import YouTube from 'react-youtube';
import {
    motion
  } from "framer-motion";

export const VideoCard = ({
    product,
    translate,
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-96 w-[30rem] relative flex-shrink-0 overflow-hidden"
      >
        <Link
          href={product.link}
          className="block group-hover/product:shadow-2xl "
        >
          <VideoThumbnail
              videoId={product.videoId}
              title={product.title}
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };

const VideoThumbnail = ({ videoId }) => {
    const onReady = (event) => {
        // Acceder al reproductor de YouTube y reproducir el video
        event.target.mute();
        event.target.playVideo();
    };

    const onEnd = (event) => {
        event.target.playVideo();
      };
    
    const opts = {
        // height: '400',
        // width: '450',
        playerVars: {
          autoplay: 1,
          mute: 1,
          modestbranding: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
        },
    };
    

  return (
    <div className="absolute h-full w-full inset-0 flex items-center">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd}/>
    </div>
  );
};
