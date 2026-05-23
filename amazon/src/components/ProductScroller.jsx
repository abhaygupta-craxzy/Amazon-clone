import  { useRef } from 'react';

const ProductScroller = ({ title, items }) => {
  const containerRef = useRef(null);

  // We can add simple navigation buttons if we want a richer design, 
  // but a simple horizontal scroll container works beautifully and matches original code.
  return (
    <div className="scroll-box">
      <div className="scroll-title">{title}</div>
      <div className="scroll-container" ref={containerRef}>
        {items.map((item, index) => {
          const imgSrc = typeof item === 'string' ? item : item.img;
          const imgAlt = typeof item === 'string' ? '' : (item.alt || '');
          return (
            <div className="scroll-item" key={index}>
              <img src={imgSrc} alt={imgAlt} loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductScroller;
