import YouTubeTv from "./youtubePlayer";

export default function TvComponent() {
    const svgContainerStyle = {
        position: 'relative',
    };

    const replacementDivStyle = {
        position: 'absolute',
        top: '64px',
        left: '115px',
        width: '36.25rem',
        height: '27.188rem',
        backgroundColor: 'black',
        padding: '1rem',
        zIndex: 1,
    };

    const overlaySvgStyle = {
        position: 'absolute',
        zIndex: 2,
    };

    return (
        <div className="w-full z-50 relative">
            <div className="absolute inset-y-[8rem] inset-x-[25rem]">
                <div style={svgContainerStyle} className="bg-black">
                    <div style={replacementDivStyle} >
                        <YouTubeTv oldCss={false}/>
                    </div>
                    <svg style={overlaySvgStyle} width="812" height="641" viewBox="0 0 812 641" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H812V641H0V0Z" fill="url(#pattern0_0_1)" />
                        <defs>
                            <pattern id="pattern0_0_1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_0_1" transform="matrix(0.00031615 0 0 0.00040049 -0.022293 -0.0140406)" />
                            </pattern>
                            <image id="image0_0_1" width="3456" height="2532" href="/images/TV.webp" />
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}