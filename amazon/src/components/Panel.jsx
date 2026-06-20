
const Panel = () => {
  const panelLinks = [
    { label: 'Fresh', url: 'https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh', hasCaret: true },
    { label: 'MX Player', url: 'https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav' },
    { label: 'Sell', url: 'https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3' },
    { label: 'Bestsellers', url: 'https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers' },
    { label: 'Mobiles', url: 'https://www.amazon.in/gp/browse.html?node=1389401031&ref_=nav_em_sbc_mobcomp_all_mobiles_0_2_8_2' },
    { label: 'Today\'s Deals', url: 'https://www.amazon.in/deals?ref_=nav_cs_gb' },
    { label: 'New Releases', url: 'https://www.amazon.in/s?k=new+release+items&crid=YKV5NS45IJNL&sprefix=new+release+item%2Caps%2C312&ref=nb_sb_noss_2' },
    { label: 'Customer Service', url: 'https://www.amazon.in/hz/contact-us/foresight/hubgateway' },
    { label: 'Prime', url: 'https://www.amazon.in/music/prime?ref_=nav_em_dmm_in_nav_pc_apm_mlp_0_2_7_2', hasCaret: true },
    { label: 'Amazon Pay', url: 'https://www.amazon.in/amazonpay/home?ref_=nav_cs_apay' },
    { label: 'Electronics', url: 'https://www.amazon.in/gp/browse.html?node=976419031&ref_=nav_em_sbc_tvelec_all_elec_0_2_9_13' },
    { label: 'Fashion', url: 'https://www.amazon.in/s?k=fashion&crid=17LML7Y4UFZYW&sprefix=fashion%2Caps%2C289&ref=nb_sb_noss_2' },
    { label: 'Home & Kitchen', url: 'https://www.amazon.in/gp/browse.html?node=976442031&ref_=nav_em_sbc_hk_all_0_2_12_15' },
    { label: 'Computers', url: 'https://www.amazon.in/gp/browse.html?node=976392031&ref_=nav_em_sbc_mobcomp_all_comp_0_2_8_13' },
    { label: 'Toys & Games', url: 'https://www.amazon.in/gp/browse.html?node=1350380031&ref_=nav_em_sbc_tbk_toys_games_0_2_15_2' },
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
