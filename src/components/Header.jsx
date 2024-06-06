import React, { useState, useEffect, useCallback } from "react";
import style from "./header.module.css";

const Header = () => {
    // State to manage whether the checkbox is checked or not
    // Initially set based on the window width
    const [checkboxChecked, setCheckboxChecked] = useState(window.innerWidth > 500);
    
    // State to manage the display style of the menu
    // Initially set based on the window width
    const [menuDisplay, setMenuDisplay] = useState(window.innerWidth > 500 ? "flex" : "none");

    // Handle window resize to update states based on window width
    const handleResize = useCallback(() => {
        if (window.innerWidth <= 500) {
            setCheckboxChecked(false);// Uncheck checkbox if width is 500px or less
            setMenuDisplay("none");// Hide menu if width is 500px or less
        } else {
            setCheckboxChecked(true);// Check checkbox if width is more than 500px
            setMenuDisplay("flex");// Show menu if width is more than 500px
        }
    }, []);

    // Effect to add and remove resize event listener with debounce
    useEffect(() => {
        const debouncedHandleResize = debounce(handleResize, 250);
        window.addEventListener("resize", debouncedHandleResize);

        // Initial check on component mount
        handleResize();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    }, [handleResize]);

    // Handle checkbox change event
    const checkboxChange = (e) => {
        setCheckboxChecked(e.target.checked); // Update checkbox state
        setMenuDisplay(e.target.checked ? "flex" : "none"); // Update menu display based on checkbox state
    };

    return (
        <header className={style.mainHeader}>
            <div className={style.websiteLogo}><span>Go</span>Guide</div>
            <label htmlFor="check">
                <input type="checkbox" id="check" checked={checkboxChecked} onChange={checkboxChange} />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul style={{ display: menuDisplay }}>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
            <div className={style.mainHeaderRightDiv} style={{ display: menuDisplay }}>
                <div>List your spot</div>
                <span>
                    <svg width="40px" height="40px" viewBox="0 0 20.00 20.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <desc></desc>
                            <defs></defs>
                            <g id="Page-1" strokeWidth="0.0002" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2159.000000)" fill="#ffffff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" id="profile-[#ffffff]"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Log In
                </span>
            </div>
        </header>
    );
};

// Debounce function to limit the rate at which a function can fire
const debounce = (func, delay) => {
    let timeoutId;
    return function debounced(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};

export default Header;
