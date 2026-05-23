
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="foot1" onClick={scrollToTop}>
        Back to top
      </div>

      <div className="foot2">
        <div className="test" style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', padding: '20px' }}>
          <ul>
            <li><h4>Get to Know Us</h4></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>

          <ul>
            <li><h4>Connect with Us</h4></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>

          <ul>
            <li><h4>Make Money with Us</h4></li>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Sell under Amazon Accelerator</a></li>
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Amazon Global Selling</a></li>
            <li><a href="#">Supply to Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfilment by Amazon</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Amazon Pay on Merchants</a></li>
          </ul>

          <ul>
            <li><h4>Let Us Help You</h4></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">Recalls and Product Safety Alerts</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Amazon App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="foot3">
        <div className="logo2"></div>
      </div>

      <div className="foot4">
        <div className="pages">
          <a href="#">Conditions of Use & sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="copy">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
