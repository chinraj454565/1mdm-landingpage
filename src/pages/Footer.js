
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
            <li><a href="#">Sell on 1MDM</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Brands</a></li>
         </ul>
        </div>
        <div className="footer-col">
          <h4>Press Room</h4>
          <ul>
            <li><a href="#">Images and B-roll</a></li>

            <li><h4>Policies</h4></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

       

        <div className="footer-col">
          <h4>Reach Us</h4>
          <ul>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
            
          </ul>
        </div>
        
        </div>
      
      <div className="footer-bottom">
        &copy; 2025 1MDM by SuperLabs
      </div>
    </div>
  </footer>
);