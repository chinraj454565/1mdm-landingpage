import {IconMessageSquare,} from "./elements/IconsStore";


export const CallToActionBanner = () => (
  <section className="cta-banner">
    <div className="container">
      <h2>Ready to Grow Your Business?</h2>
      
      <div className="cta-group">
        <button className="btn btn-primary">Start selling</button>
        <button className="btn btn-secondary">
          <IconMessageSquare />
          Chat with consultant
        </button>
      </div>
    </div>
  </section>
);