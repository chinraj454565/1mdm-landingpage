

export const HeroSection = () => {
  const stats = [
    { value: '26,000,000', label: 'active buyers globally' },
    { value: '400,000', label: 'product inquiries daily' },
    { value: '200', label: 'countries and regions represented' },
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container-2">
        < div className="reach-heading">
           <h1>Sell on 1mdm.com</h1>
           <h2>Reach millions of B2B medical equipment buyers globally</h2>
           <div className="cta-group">
              <button className="btn btn-primary">Start selling</button>
              <button className="btn btn-secondary">
              
              Chat with consultant
              </button>
            </div> 
        </div>
      
       
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};