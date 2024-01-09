// backgroundScript.js

// Listen for messages from content scripts.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.timerFound) {
        // Trigger a notification.
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'path/to/your/icon.png', // Replace with the path to your extension icon
            title: 'Timer Found',
            message: 'A timer was found on the page!',
        });
    }
});
