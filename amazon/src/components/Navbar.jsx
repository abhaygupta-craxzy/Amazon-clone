const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-menu-mobile">
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="nav-logo border">
        <div className="logo"></div>
      </div>

      <div className="nav-adress border">
        <p className="nav-addr-first">Deliver to Abhay</p>
        <div className="add-icon">
          <i className="fa-solid fa-location-dot"></i>
          <p className="nav-addr-second">Delhi,India,201001</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search" aria-label="Select search category">
          <option>All</option>
        </select>
        <input
          type="text"
          className="search-box"
          placeholder="Search Amazon.in"
        />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="language border">
        <div className="flag">
          <img
            src="https://th.bing.com/th/id/OIP.9YtAsanlFMBU3PoImltJpwHaFP?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Flag"
          />
        </div>
        <p className="lang-text">EN</p>
        <div className="cur">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div className="account border">
        <div>
          <p className="nav-first">
            <span>Hello,sign in</span>
          </p>
        </div>
        <div>
          <p className="nav-second">Account & Lists</p>
        </div>
      </div>

      <div className="return border">
        <p className="nav-first">
          <span>Returns</span>
        </p>
        <p className="nav-second">& Orders</p>
      </div>

      <div className="cart border">
        <a
          href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"
          target="_blank"
          rel="noopener noreferrer"
          className="cart border"
        >
          <i className="fa-solid fa-cart-arrow-down"></i>

          {/* <span>Cart</span> */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
