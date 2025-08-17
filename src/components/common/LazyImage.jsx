import { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, className, placeholder }) => {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Solo deja de observar esa imagen
        }
      },
      {
        rootMargin: "200px", // Empieza a cargar antes de que aparezca
        threshold: 0.1,
      }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={visible ? src : placeholder || ""}
      alt={alt}
      className={className}
      loading="lazy"
      style={{
        backgroundColor: placeholder ? "transparent" : "#ccc", // Fallback gris
      }}
    />
  );
};

export default LazyImage; 
