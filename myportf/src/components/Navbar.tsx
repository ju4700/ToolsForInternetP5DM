import React from 'react';
import PillNav from './PillNav';

const Navbar: React.FC = () => {
  const items = [
    {
      label: "Home",
      href: "#home",
      ariaLabel: "Go to home section"
    },
    {
      label: "About",
      href: "#about",
      ariaLabel: "Go to about section"
    },
    {
      label: "Projects", 
      href: "#projects",
      ariaLabel: "Go to projects section"
    },
    {
      label: "Contact",
      href: "#contact",
      ariaLabel: "Go to contact section"
    }
  ];

  // Create a minimal placeholder logo (since PillNav requires one but we don't want to show it)
  const placeholderLogo = "data:image/svg+xml;base64," + btoa(`
    <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="1" fill="transparent"/>
    </svg>
  `);

  return (
    <div className='flex'>
        <div className=''>
            JU4700
        </div>
        <div className="flex justify-start py-4 ml-10">
        <PillNav
            logo={placeholderLogo}
            logoAlt=""
            items={items}
            baseColor="#fff"
            pillColor="#0D0716"
            hoveredPillTextColor="#0D0716"
            pillTextColor="#fff"
            ease="power3.easeOut"
            initialLoadAnimation={true}
            className="!static !transform-none !left-auto !w-auto [&>nav>a[aria-label='Home']]:hidden [&>nav>div]:!ml-0"
        />
        </div>
    </div>
  );
};

export default Navbar;