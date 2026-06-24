import './App.css';
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import ProductGrid from './components/ProductGrid';
import ProductScroller from './components/ProductScroller';
import Footer from './components/Footer';


import {
  revampHomeItems,
  bulkOrderItems,
  appliancesItems,
  headphonesItems,
  pickupLeftOffItems,
  lovedProductsItems,
  keepShoppingItems,
  mostBroughtItems,
  continueShoppingScroller,
  relatedItemsScroller,
  homeItemsScroller,
  uniqueHomeFindsScroller,
  phoneCaseScroller,
  freshStartsScroller,
  breakfastScroller,
  householdScroller,
  trendingElectronicsScroller,
  gamesScroller,
  inspiredBrowsingScroller,
} from './data';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Panel />

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-image"></div>
        <ProductGrid title="Revamp your home in style" items={revampHomeItems} />
        <ProductGrid title="Bulk order discounts" items={bulkOrderItems} />
        <ProductGrid title="Appliances for your home" items={appliancesItems} />
        <ProductGrid title="Starting ₹149 | Headphones" items={headphonesItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Continue Shopping" items={continueShoppingScroller} />
      <ProductScroller title="Related to items you've viewed" items={relatedItemsScroller} />

      {/* SHOP SECTION 1 */}
      <div className="shop">
        <ProductGrid title="Pick up where you left off" items={pickupLeftOffItems} />
        <ProductGrid title="Customers’ Most-Loved products" items={lovedProductsItems} />
        <ProductGrid title="Keep shopping for" items={keepShoppingItems} />
        <ProductGrid title="Customers’ Most-Brought products" items={mostBroughtItems} />
      </div>

      {/* SHOP SECTION 2 */}
      <div className="shop">
        <ProductGrid title="Revamp your home in style" items={revampHomeItems} />
        <ProductGrid title="Bulk order discounts" items={bulkOrderItems} />
        <ProductGrid title="Appliances for your home" items={appliancesItems} />
        <ProductGrid title="Starting ₹149 | Headphones" items={headphonesItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Home Items you've viewed" items={homeItemsScroller} />
      <ProductScroller title="Min. 50% off | Unique home finds | Amazon Brands & more" items={uniqueHomeFindsScroller} />

      {/* SHOP SECTION 3 */}
      <div className="shop">
        <ProductGrid title="Revamp your home in style" items={revampHomeItems} />
        <ProductGrid title="Bulk order discounts" items={bulkOrderItems} />
        <ProductGrid title="Appliances for your home" items={appliancesItems} />
        <ProductGrid title="Starting ₹149 | Headphones" items={headphonesItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Additional items to explore" items={homeItemsScroller} /> {/* Matches docs/index.html scroll logic */}
      <ProductScroller title="Continue your Search for Phone case" items={phoneCaseScroller} />

      {/* SHOP SECTION 4 */}
      <div className="shop">
        <ProductGrid title="Pick up where you left off" items={pickupLeftOffItems} />
        <ProductGrid title="Customers’ Most-Loved products" items={lovedProductsItems} />
        <ProductGrid title="Keep shopping for" items={keepShoppingItems} />
        <ProductGrid title="Customers’ Most-Brought products" items={mostBroughtItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Fresh Starts Essentials" items={freshStartsScroller} />
      <ProductScroller title="Breakfast Essentials" items={breakfastScroller} />

      {/* SHOP SECTION 5 */}
      <div className="shop">
        <ProductGrid title="Revamp your home in style" items={revampHomeItems} />
        <ProductGrid title="Bulk order discounts" items={bulkOrderItems} />
        <ProductGrid title="Appliances for your home" items={appliancesItems} />
        <ProductGrid title="Starting ₹149 | Headphones" items={headphonesItems} />
      </div>

      {/* SHOP SECTION 6 */}
      <div className="shop">
        <ProductGrid title="Pick up where you left off" items={pickupLeftOffItems} />
        <ProductGrid title="Customers’ Most-Loved products" items={lovedProductsItems} />
        <ProductGrid title="Keep shopping for" items={keepShoppingItems} />
        <ProductGrid title="Customers’ Most-Brought products" items={mostBroughtItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Up to 60% off | Household, cooking needs & more" items={householdScroller} />

      {/* SHOP SECTION 7 */}
      <div className="shop">
        <ProductGrid title="Revamp your home in style" items={revampHomeItems} />
        <ProductGrid title="Bulk order discounts" items={bulkOrderItems} />
        <ProductGrid title="Appliances for your home" items={appliancesItems} />
        <ProductGrid title="Starting ₹149 | Headphones" items={headphonesItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Trending Electronics" items={trendingElectronicsScroller} />

      {/* SHOP SECTION 8 */}
      <div className="shop">
        <ProductGrid title="Pick up where you left off" items={pickupLeftOffItems} />
        <ProductGrid title="Customers’ Most-Loved products" items={lovedProductsItems} />
        <ProductGrid title="Keep shopping for" items={keepShoppingItems} />
        <ProductGrid title="Customers’ Most-Brought products" items={mostBroughtItems} />
      </div>

      {/* SCROLLER SECTIONS */}
      <ProductScroller title="Game's you have to Play" items={gamesScroller} />
      <ProductScroller title="Inspired by your browsing history" items={inspiredBrowsingScroller} />

      <Footer />
    </div>
  );
}

export default App;


