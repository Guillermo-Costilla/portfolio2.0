import { useState } from "react";

function ImageWithSkeleton({ src, alt, className = "", aspect = "aspect-[16/10]" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-white/5 ${aspect} ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}
      {failed ? (
        <div className="absolute inset-0 grid place-items-center text-sm text-[var(--muted)]">
          Imagen no disponible
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover object-top transition duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      )}
    </div>
  );
}

export default ImageWithSkeleton;
