const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    window.deferredPrompt = event;
    // Stash the event so it can be triggered later.
    butInstall.removeAttribute('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the prompt
    const promptEvent = window.deferredPrompt;
    // Wait for the user to respond to the prompt
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    // Clear the saved prompt since it can't be used again
    window.deferredPrompt = null;
    // Hide the button since the PWA is being installed
    butInstall.setAttribute('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
});
