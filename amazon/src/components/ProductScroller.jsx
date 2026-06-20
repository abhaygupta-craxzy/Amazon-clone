import { useRef } from "react";

const ProductScroller = ({ title, items }) => {
  const containerRef = useRef(null);

  return (
    <div className="scroll-box">
      <div className="scroll-title">{title}</div>
      <div className="scroll-container" ref={containerRef}>
        {items.map((item, index) => {
          const imgSrc = item.img;
          const imgAlt = item.alt || "";
          return (
            <div className="scroll-item" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={imgAlt} loading="lazy" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductScroller;
