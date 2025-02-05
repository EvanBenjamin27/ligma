'use strict';

// You can also use a url like      .getURL("example.com/example.png");
const customLogoURL = chrome.runtime.getURL('imgs/custom_logo.png');

const replaceLogo = () => {
    const logo = document.querySelector('a[aria-label="Gmail"] img');
    if (logo) {
        logo.src = customLogoURL;
        logo.srcset = customLogoURL; // Ensure higher resolutions are replaced
    } else {
        setTimeout(replaceLogo, 500); // Retry if not found
    }
};

replaceLogo();
