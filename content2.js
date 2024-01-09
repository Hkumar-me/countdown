// contentScript.js

// Function to check if an element contains time-related text and has a timer-like behavior.
function isTimerElement(element) {
    // Modify this function based on the structure of the target website.
    const textContent = element.textContent.toLowerCase();
    const hasMins = textContent.includes('min');
    const hasSecs = textContent.includes('sec');

    // You can add additional conditions based on the structure of your target website.
    // For example, check if the element has a specific class or tag name.

    return hasMins || hasSecs;
}

// Function to handle the detected timer element.
function handleTimer(timerElement) {
    // Modify this function based on how you want to handle the detected timer element.
    console.log('Found Timer Element:', timerElement.textContent);
    // Add your custom logic here.
}

// Function to process a single node for timer detection.
function processNode(node) {
    if (isTimerElement(node)) {
        // Handle the detected timer element.
        handleTimer(node);
    }
}

// Function to process mutations in the DOM.
function processMutations(mutations) {
    mutations.forEach((mutation) => {
        // Check added nodes for potential timer elements.
        mutation.addedNodes.forEach((node) => {
            processNode(node);
        });

        // Check modified nodes for potential timer elements.
        if (mutation.type === 'characterData') {
            processNode(mutation.target);
        }
    });
}

// Create a MutationObserver to watch for changes in the DOM.
const observer = new MutationObserver(processMutations);

// Options for the MutationObserver.
const observerOptions = {
    childList: true, // Watch for changes in the child nodes (added/removed nodes).
    subtree: true, // Watch for changes in the entire subtree of the target node.
    characterData: true, // Watch for changes in the data of text nodes.
};

// Start observing the DOM with the specified options.
observer.observe(document.body, observerOptions);

// Log a message to indicate that the content script is running.
console.log('Timer Detection Content Script is running...');

// Log a message when the page is loaded to indicate that the script is active.
console.log('Content Script: Page Loaded');
