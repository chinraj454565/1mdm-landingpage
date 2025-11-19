import { useState } from "react";
import React from "react";
export const Header = () => {

    const IconMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const IconClose = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // List of navigation items for both desktop and mobile
    const navItems = [
        { label: 'About Us', href: 'https://1mdm.com/about/index.php', active: false },
        { label: 'Our Story', href: 'https://1mdm.com/about/our-story.php', active: true },
        { label: 'Sell on 1MDM', href: 'https://1mdm.com/about/seller.php', active: false },
        { label: 'Pricing', href: 'https://1mdm.com/about/pricing.php', active: false },
    ];
    
    // Top utility links
    const utilityLinks = [
        { label: 'My account', href: 'https://1mdm.com/index.php?route=account/login' },
        { label: 'Contact Us', href: 'https://1mdm.com/about/contact.php' },
    ];

    return (
        <header className="header">
            
            <div className="utility-bar">
                <div className="container utility-content">
                    <p style={{display:"block", fontSize:"13px"}}>World's Largest Medical Equipment Market Place</p>
                    <div className="account-links">
                      
                      <div>
                        {utilityLinks.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <a className="hero-btn" href={link.href}>{link.label}</a>
                                {index < utilityLinks.length - 1 && <span> | </span>}
                            </React.Fragment>
                          
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container header-content">
                <a href="https://1mdm.com/" className="logo hero-btn">
                    1MDM
                </a>
                
                
                <nav className="nav-links-desktop">
                    {navItems.map(item => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            className={` hero-btn ${item.active ? 'active' : ''}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                
                <button 
                    className="menu-toggle-btn" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <IconClose /> : <IconMenu />}
                </button>
            </div>

            
            {isMenuOpen && (
                <nav className="nav-links-mobile">
                    {navItems.map(item => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            className={item.active ? 'active' : ''}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};