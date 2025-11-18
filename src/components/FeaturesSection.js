import { useState } from "react";


export const FeaturesSection = () => {


  const features = [
    { 
      image: "https://1mdm.com/about/assets/1mdm-product-1.png", 
      title: 'Custom Storefront', 
      title2:'Set up a store that showcases your brand', 
      description: 'Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!' 
    },
    { 
      image: "https://1mdm.com/about/assets/1mdm-product-image-4.png", 
      title: 'Advertising tools',
      title2:'Increase exposure by up to 120% with a suite of smart advertising tools.', 
      description: 'Get your products placed in the right spots to be noticed by the exact audience you are targeting.' 
    },
    { 
      image: "https://1mdm.com/about/assets/1mdm-product-2.png", 
      title: 'Data and analytics', 
      title2: 'Optimize your every move with in-depth data and customer insights', 
      description: 'Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!' 
    },
    { 
      image: "https://1mdm.com/about/assets/1mdm-product-3.png", 
      title: 'Customers support',
      title2: 'Know you’re supported throughout your journey', 
      description: 'From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you' 
    },
  ];

  const [featureState, setFeature]=useState(features[0])
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Grow your business with a suite of tools built for you</h2>
        <div className="feature-grid-3">
          <div>
            {features.map((fea, index)=>(<h3 className={`feature-nav-item ${activeIndex === index ? 'active-nav-item' : ''}`} onClick={()=>{setFeature(fea); setActiveIndex(index)}} style={{cursor:"pointer"}}>{fea.title}</h3>))}
          </div>
        <div className="feature-column-1">
          <h1>{featureState.title2}</h1>
          <p>{featureState.description}</p>
        </div>
        <div className="feature-column-2">
           <img src={featureState.image} alt="image" className="feature-image" />
        </div>
     </div>
     </div>
    </section>
  );
};