const ProductGrid = ({
  title,
  items,
  linkText = "See more",
  linkUrl = "#",
  isTop = false,
}) => {
  return (
    <div className={`box ${isTop ? "top" : ""}`}>
      <div className="box-content">
        <h2>{title}</h2>
        <div className="box-img-grid">
          {items.map((item, index) => (
            <div className="grid-item" key={index}>
              <a href={item.link} target="_self">
                <img src={item.img} alt={item.alt || item.label} />
              </a>
                <span>{item.label}</span>
            </div>
          ))}
        </div>
        <a href={linkUrl}>{linkText}</a>
      </div>
    </div>
  );
};

export default ProductGrid;
