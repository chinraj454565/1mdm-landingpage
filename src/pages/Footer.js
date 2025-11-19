
export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        
        <div className="footer-col" style={{ gridColumn: 'span 2' }}>
          <p className="logo" style={{ color: 'var(--color-primary)' }}>1MDM</p>
          <p style={{ color: 'var(--color-gray)', fontSize: '0.875rem' }}>One Medical Devices Market Place</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="https://1mdm.com/about/seller.php">Sell on 1MDM</a></li>
            <li><a href="https://1mdm.com/about/pricing.php">Pricing</a></li>
            <li><a href="https://1mdm.com/about/index.php">About Us</a></li>
            <li><a href="https://1mdm.com/about/our-story.php">Our Story</a></li>
            <li><a href="https://superlabs.co/careers.php">Careers</a></li>
            <li><a href="https://1mdm.com/index.php?route=extension/maza/blog/home">Blog</a></li>
            <li><a href="https://1mdm.com/index.php?route=product/manufacturer">Brands</a></li>
         </ul>
        </div>
        <div className="footer-col">
          <h4>Press Room</h4>
          <ul>
            <li><a href="https://1mdm.com/about/press.php">Images and B-roll</a></li>

            <li><h4>Policies</h4></li>
            <li><a href="https://1mdm.com/terms-of-service">Terms of Service</a></li>
            <li><a href="https://1mdm.com/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://1mdm.com/delivery-information">Delivery Information</a></li>
          </ul>
        </div>

       

        <div className="footer-col">
          <h4>Reach Us</h4>
          <ul>
            <li><a href="https://1mdm.com/corporate-information">Corporate Information</a></li>
            <li><a href="https://1mdm.com/about/contact.php">Contact Us</a></li>
            
          </ul>
        </div>
        
        </div>
      
      <div className="footer-bottom">
        &copy; 2025 1MDM by SuperLabs
      </div>
    </div>
  </footer>
);