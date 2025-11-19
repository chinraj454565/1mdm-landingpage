import {IconMessageSquare,} from "./elements/IconsStore";


export const CallToActionBanner = () => (
  <section className="cta-banner">
    <div className="container">
      <h2>Ready to Grow Your Business?</h2>
      
      <div className="cta-group">
        <button  className="btn btn-primary"><a href="https://1mdm.com/about/pricing.php">Start selling</a></button>
        <button className="btn btn-secondary btn-cta"><a href="https://api.whatsapp.com/send/?phone=%2B919820045154&text&type=phone_number&app_absent=0">
          <IconMessageSquare />
          Chat with consultant</a>
        </button>
      </div>
    </div>
  </section>
);