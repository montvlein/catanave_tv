'use client'
import { useRef, useState, useEffect } from "react";

function PromotionalDisplay() {
    const videoRef = useRef(null);
    const [visible, setVisible] = useState(true)
    const handleEnd = () => {setVisible(false)}

    useEffect(() => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setTimeout(() => {
                  videoRef.current.muted = false;
                }, 500);
              })
              .catch((error) => console.log("Autoplay bloqueado:", error));
          }
        }
    }, []);

    return (
        <div className={`absolute z-[60] w-full h-full flex items-center bg-black/95 bg-logo bg-repeat ${visible? "" : "hidden"}`}>
            <div className="relative">
                <div
                    className="z-[61] absolute top-0 right-0 sm:top-5 sm:right-5 bg-white/30 text-rose-800 border-2 border-red-900 px-2 rounded-full font-bold cursor-pointer hover:bg-black"
                    onClick={()=>{
                        setVisible(false)
                        if (videoRef.current) {
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                        }
                    }}
                >X</div>
                <video ref={videoRef} autoPlay muted playsInline controls onEnded={handleEnd} controlsList="nodownload">
                    <source src={"/videos/promo.webm"} type="video/webm" />
                    <source src={"/videos/promo.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default PromotionalDisplay
