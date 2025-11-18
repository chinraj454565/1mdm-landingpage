import {IconSupport} from "./elements/IconsStore";


export const VideoandText = () => (
  <section className="video-value-section">
    <div className="container">
      <h2 className="section-subtitle">1mdm.com is a leading ecommerce platform <span style={{display:"block"}}>that</span> helps SMEs go global</h2>
      <div className="video-content-grid">
        
        <div className="video-placeholder">
          <div className="video-media-wrapper">
            <p>SIGNA™ Explorer Lift Installation Video</p>
            <div className="play-button-overlay">▶</div>
          </div>
          <p className="video-caption">Watch on <IconSupport style={{width: '16px', height: '16px', color: 'red'}} /> Youtube</p>
        </div>
        
        
        <div className="value-points">
          <p>Connect with millions of business buyers from around the world.</p>
          <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
          <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
        </div>
      </div>
    </div>
  </section>
);