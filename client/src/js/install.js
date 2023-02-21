// Install PWA
const butInstall = document.getElementById('buttonInstall');

// event handler for `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // store triggered events
    butInstall.classList.toggle('hidden', false); // remove hidden class from button
});

// click event handler on `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) { // return if there is no prompt event
        return;
    }

    promptEvent.prompt(); // show prompt

    window.deferredPrompt = null; // reset the deferred prompt variable bc it can only be used once

    butInstall.classList.toggle('hidden', true);
});

// event handler for `appinstalled`
window.addEventListener('appinstalled', (event) => {// Clear prompt
    window.deferredPrompt = null; // clear prompt
});