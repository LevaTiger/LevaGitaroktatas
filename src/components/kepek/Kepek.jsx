import { useEffect, useRef, useState } from "react";
import "./kepek.css";


const images = [
  {
    src: "/assets/kepek-oldal/lunda-kaposzta.webp",
    caption: "Lunda koncert - Gyergyói Kápszta Fesztivál",
  },
  {
    src: "/assets/kepek-oldal/lunda-magyarnapok.webp",
    caption: "Lunda koncert - Fehér Megyei Magyar Napok",
  },
  {
    src: "/assets/kepek-oldal/lunda-magyarnapok (2).webp",
    caption: "Lunda koncert - Fehér Megyei Magyar Napok",
  },
  {
    src: "/assets/kepek-oldal/lunda-sicfest.webp",
    caption: "Lunda koncert - Sic Feszt",
  },
  {
    src: "/assets/kepek-oldal/kozmix-Dori-Levi.webp",
    caption: "Kozmix koncert",
  },
  {
    src: "/assets/kepek-oldal/kozmix-hatulrol.webp",
    caption: "Kozmix koncert",
  },
  {
    src: "/assets/kepek-oldal/kozmix-Lala-Dori-Levi.webp",
    caption: "Kozmix koncert ",
  },
  {
    src: "/assets/kepek-oldal/kozmix-levi-tapping.webp",
    caption: "Kozmix koncert",
  },
  {
    src: "/assets/kepek-oldal/lunda-szulinapi-mosoly.webp",
    caption: "Lunda koncert - Szülinapi buli",
  },
  {
    src: "/assets/kepek-oldal/lunda-szulinapi.webp",
    caption: "Lunda koncert - Szülinapi buli",
  },
  {
    src: "/assets/kepek-oldal/Lunda-szulinapiAnitaval.webp",
    caption: "Lunda koncert - Szülinapi buli",
  },
  {
    src: "/assets/kepek-oldal/lundaszulinapi.webp",
    caption: "Lunda koncert - Szülinapi buli",
  },
  {
    src: "/assets/kepek-oldal/lunda-vibefest.webp",
    caption: "Lunda koncert - Vibe Feszt",
  },
  {
    src: "/assets/kepek-oldal/lunda-vibefest2.webp",
    caption: "Lunda koncert - Vibe Feszt",
  },
  {
    src: "/assets/kepek-oldal/studiofotoSanyiLevi.webp",
    caption: "Stúdió fotózás - Sanyi és Levi",
  },
  
];

const Kepek = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);
    const figureRefs = useRef([]);
    const [visible, setVisible] = useState(Array(images.length).fill(false));
  
    // Intersection Observer for grid images
    useEffect(() => {
      if (window.innerWidth <= 900) return; // Only for grid view
      const observers = images.map((_, idx) => {
        return new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }
          },
          { threshold: 0.2 }
        );
      });
      figureRefs.current.forEach((ref, idx) => {
        if (ref) observers[idx].observe(ref);
      });
      return () => {
        observers.forEach((observer) => observer.disconnect());
      };
    }, []);
  
    // Auto-slide for slider
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(intervalRef.current);
    }, []);
  
    // Manual navigation resets timer
    const goTo = (idx) => {
      setCurrent(idx);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 700);
    };
  
    return (
      <div className="container-fluid m-0 p-0 kepek-gallery">
        {/* Wide screen: grid, Small screen: slider */}
        <div className="kepek-grid p-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`kepek-figure${visible[i] ? " visible" : ""}`}
              ref={el => (figureRefs.current[i] = el)}
            >
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="kepek-slider">
          <button
            className="slider-btn left"
            onClick={() => goTo((current - 1 + images.length) % images.length)}
            aria-label="Előző"
          >
            &#8592;
          </button>
          <figure className="slider-figure">
            <img src={images[current].src} alt={images[current].caption} />
            <figcaption>{images[current].caption}</figcaption>
          </figure>
          <button
            className="slider-btn right"
            onClick={() => goTo((current + 1) % images.length)}
            aria-label="Következő"
          >
            &#8594;
          </button>
        </div>
      </div>
    );
  };
  
  export default Kepek;