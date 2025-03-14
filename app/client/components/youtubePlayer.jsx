'use client'

import YouTube from 'react-youtube';
import { useState, useCallback } from "react";
import RemoteControl from './control';
import useYouTubePlaylist from '@/server/youtubeHook';

export default function YouTubeTv({oldCss=true}) {
    const { videos, loading, error } = useYouTubePlaylist();
    const randomInt = Math.floor(Math.random() * videos.length )
    const [actualVideo, setActualVideo] = useState(videos.length > 0 ? randomInt : 0)
    const [mute, setMute] = useState(1)

    const onEnd = useCallback((event) => {
      nextVideo();
      event.target.playVideo();
    }, []);

    const nextVideo = useCallback((e) => {
      e?.preventDefault();
      setActualVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, []);

    const prevVideo = useCallback((e) => {
      e?.preventDefault();
      setActualVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    }, []);

    const handleMute = useCallback((e) => {
      e.preventDefault();
      setMute((prev) => (prev === 0 ? 1 : 0));
    }, []);

    const videoOptions = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        mute,
        modestbranding: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    };

    return(
        <>
        { !loading && !error && videos.length > 0 && (
          <YouTube
            videoId={videos[actualVideo].videoId}
            opts={videoOptions}
            onEnd={onEnd}
            className={`z-10 aspect-square ${oldCss? "w-8/12 lg:w-6/12 h-3/4": "w-full h-full"} mr-4 md:mr-12 mb-4 md:mb-10 lg:mb-28 rounded-lg bg-logo bg-no-repeat shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]`}
            />
        )}
          <RemoteControl>
            <div className="w-full flex gap-4 items-center justify-center">
              <button
                  type='button'
                  aria-label='previous_video'
                  className="relative w-6 h-6 cursor-pointer bg-gray-500 rounded-sm"
                  onClick={prevVideo}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-transparent border-r-[#3c2c5e]"></div>
                </button>
                <MuteButton mute={mute} onClick={handleMute} />
                <button
                  type='button'
                  aria-label='next_video'
                  className="relative w-6 h-6 cursor-pointer bg-gray-500 rounded-sm"
                  onClick={nextVideo}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-transparent border-l-[#3c2c5e]"></div>
                </button>
            </div>
          </RemoteControl>
        </>
    )
}

const MuteButton = ({ mute, onClick }) => (
    <button type='button' aria-label='mute' onClick={onClick}>
      {mute === 1 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          color="#d0021b"
          fill="none"
        >
          {/* Mute Icon */}
          <path d="M22 22L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 10C17.6296 10.7667 18 11.7054 18 12.7195C18 13.1635 17.929 13.593 17.7963 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8C21.2508 9.22951 22 10.7952 22 12.5C22 13.9164 21.4829 15.2367 20.5906 16.348" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 14C14 17.1452 14 19.5313 13.074 19.9227C12.1481 20.3141 11.0583 19.2021 8.8787 16.9781C7.7499 15.8264 7.106 15.5713 5.5 15.5713C4.3879 15.5713 3.02749 15.7187 2.33706 14.6643C2 14.1496 2 13.4331 2 12C2 10.5669 2 9.85038 2.33706 9.33566C3.02749 8.28131 4.3879 8.42869 5.5 8.42869C6.60725 8.42869 7.3569 8.43869 7.96 7.96M14 9.5C14 6.3548 14.026 4.46866 13.1 4.0773C12.3292 3.75147 11.5323 4.46765 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          color="#417505"
          fill="none"
        >
          {/* Unmute Icon */}
          <path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
);