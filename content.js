'use strict';

// Get the local image URL from the extension
const customLogoURL = chrome.runtime.getURL('imgs/custom_logo.png');

// Function to replace the Gmail logo
const replaceLogo = () => {
    const logo = document.querySelector('a[aria-label="Gmail"] img');
    if (logo) {
        logo.src = customLogoURL;
        logo.srcset = customLogoURL; // Ensure higher resolutions are replaced
    } else {
        setTimeout(replaceLogo, 500); // Retry if not found
    }
};

// Start the logo replacement
replaceLogo();
