import React from 'react'

const TextSliderSection = () => {
    const repeatCount = 7;
    return (
        <>
            <div className="section-text-slider">
                <div className="bg-black py-5">
                    <div className="horizontal-slide-from-right-to-left flex items-center gap-x-6">
                        {Array.from({ length: repeatCount }).map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="whitespace-nowrap font-syne text-[35px] font-bold leading-none tracking-[1px] text-colorLightLime">
                                    Transforming concepts into reality
                                </div>
                                <div className="h-10 min-w-[42px]">
                                    <img
                                        src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                        alt="shape-light-lime-5-arms-star"
                                        width="74"
                                        height="70"
                                        className="h-10 w-auto"
                                    />
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextSliderSection