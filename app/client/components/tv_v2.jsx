import YouTubeTv from "./youtubePlayer";

export default function TvComponent() {
    return (
        <div className="image-container">
            <img src="/images/TV.webp" alt="tv"/>
            <div className="overlay-area-1">
                <YouTubeTv oldCss={false}/>
            </div>
        </div>
    )
}