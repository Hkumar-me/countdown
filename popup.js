// Listen for messages from content script.
chrome.runtime.onMessage.addListener(function (message) {
    if (message.timerFound !== undefined) {
        const timerFound = message.timerFound;
        console.log('Timer found in content script:', timerFound);

        // Use the timerFound variable as needed in your popup.js logic.
    }
});
