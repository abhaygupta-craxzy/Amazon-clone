

const Panel = () => {
  const panelLinks = [
    { label: 'Fresh', url: 'https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh', hasCaret: true },
    { label: 'MX Player', url: 'https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav' },
    { label: 'Sell', url: 'https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3' },
    { label: 'Bestsellers', url: 'https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers' },
    { label: 'Mobiles', url: 'https://www.amazon.in/deals?ref_=nav_cs_gb' },
    { label: 'Today\'s Deals', url: 'https://www.amazon.in/deals?ref_=nav_cs_gb' },
    { label: 'New Releases', url: '#' },
    { label: 'Customer Service', url: '#' },
    { label: 'Prime', url: 'https://www.amazon.in/music/prime?ref_=nav_em_dmm_in_nav_pc_apm_mlp_0_2_7_2', hasCaret: true },
    { label: 'Amazon Pay', url: 'https://www.amazon.in/amazonpay/home?ref_=nav_cs_apay' },
    { label: 'Electronics', url: '#' },
    { label: 'Fashion', url: '#' },
    { label: 'Home & Kitchen', url: '#' },
    { label: 'Computers', url: '#' },
    { label: 'Toys & Games', url: '#' },
    { label: 'Books', url: 'https://www.amazon.in/kindle-dbs/storefront?storeType=browse&node=1634753031&ie=UTF8&ref_=nav_cs_kindle_books&ref_=nav_cs_kindle_books' }
  ];

  return (
    <div className="panel">
      <div className="panel-item border">
        <i className="fa-solid fa-bars" style={{ marginRight: '5px' }}></i>
        All
      </div>
      
      <div className="panel-links">
        {panelLinks.map((link, idx) => (
          <div key={idx} className="panel-item border">
            {link.url === '#' ? (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {link.label}
                {link.hasCaret && <i className="fa-solid fa-caret-down" style={{ marginLeft: '4px', fontSize: '9px', color: '#ccc' }}></i>}
              </span>
            ) : (
              <a href={link.url} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                {link.label}
                {link.hasCaret && <i className="fa-solid fa-caret-down" style={{ marginLeft: '4px', fontSize: '9px', color: '#ccc' }}></i>}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panel;
