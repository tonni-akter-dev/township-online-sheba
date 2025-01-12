import React from "react";

const MediaCoverage = () => {
    const mediaLogos = [
        { id: 1, src: "/m1.png", alt: "ATN News" },
        { id: 2, src: "/m2.png", alt: "Jamuna TV" },
        { id: 3, src: "/m3.png", alt: "BBC Bangla" },
        { id: 4, src: "/m4.png", alt: "Jugantor" },
        { id: 5, src: "/m5.png", alt: "Ittefaq" },
    ];

    return (
        <div className="bg-white py-10">
            <h2 className="text-4xl text-center font-bold my-8 capitalize">Media Coverage</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {mediaLogos.map((logo) => (
                    <div key={logo.id} className="w-[11rem] h-[11rem] flex items-center justify-center">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaCoverage;
