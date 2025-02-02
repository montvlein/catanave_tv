'use client'
import { useState } from "react";

function PromotionalDisplay() {
    const [isPromotionDayComingUp, setIsPromotionDayComingUp] = useState(true)
    const handleEnd = () => {setIsPromotionDayComingUp(false)}
    if (!isPromotionDayComingUp) return <></>

    return (
        <div className="absolute z-[60] w-full h-full flex items-center bg-black/90 bg-logo bg-repeat">
            <div className="relative">
                <div className="z-[61] absolute top-5 right-5 bg-white/30 text-rose-800 border-2 border-red-900 px-2 rounded-full font-bold cursor-pointer hover:bg-black">X</div>
                <video autoPlay onEnded={handleEnd}>
                    <source src={"/videos/promo.webm"} type="video/webm" />
                    <source src={"/videos/promo.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default PromotionalDisplay