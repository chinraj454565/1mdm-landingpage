
import { useState } from "react";

const IconArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
);

const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
);

const testimonialStories = [
    {
      name: 'Mr. David',
      company: 'David Manufacturing Co.',
      quote: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years' experience using IP systems that are conventional.",
      image: "https://1mdm.com/about/assets/slider-1.webp",
    },
    {
      name: 'Rupesh Kanna',
      company: 'Kanna Imaging Solutions',
      quote: 'LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTAs long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.',
      image: "https://1mdm.com/about/assets/slider-4.webp",
    },
    {
      name: 'Loyd P.',
      company: 'LTA Global Services LLC',
      quote: 'Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.',
      image: "https://1mdm.com/about/assets/slider-2.webp",
    },
  ];

export const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalStories = testimonialStories.length;
    const currentStory = testimonialStories[activeIndex];

    const nextStory = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalStories);
    };

    const prevStory = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + totalStories) % totalStories);
    };

    return (
        <section className="stories-section">
            <div className="container testimonial-slider-container">
                
                <div className="testimonial-content">
                    <div className="quote-icon">“</div>
                    <p className="testimonial-text">{currentStory.quote}</p>
                    
                </div>

                
                <div className="testimonial-image-wrapper">
                    <img 
                        src={currentStory.image} 
                        alt={currentStory.name} 
                        className="testimonial-image"
                       
                    />
                    
                    
                    <button className="slider-nav-btn nav-left" onClick={prevStory} aria-label="Previous Testimonial">
                        <IconArrowLeft />
                    </button>
                    <button className="slider-nav-btn nav-right" onClick={nextStory} aria-label="Next Testimonial">
                        <IconArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};