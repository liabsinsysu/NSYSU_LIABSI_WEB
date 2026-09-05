'use client'
import { useEffect, useState } from "react";

const images: string[] = [
  "/img/groupPhoto/IMG_1.jpg",
  "/img/groupPhoto/IMG_2.jpg",
  "/img/groupPhoto/IMG_3.JPG",
  "/img/groupPhoto/IMG_4.jpg",
  "/img/groupPhoto/IMG_5.jpg",
  "/img/groupPhoto/IMG_6.jpg",
];

export default function ScrollingImg() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();

        img.onload = () => resolve();
        img.onerror = () => resolve();

        img.src = src;
      });
    });

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-6 bg-gray-100">

      {!loaded && (
        <div className="text-center text-gray-500 py-10">
          Loading images...
        </div>
      )}

      <div
        className={`flex gap-6 w-max animate-scroll will-change-transform transition-opacity duration-700 ${
  loaded ? "opacity-100" : "opacity-0"
}`}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="w-[400px] h-[250px] flex-shrink-0 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}