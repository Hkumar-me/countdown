// // CombinedScript.js
// console.log("Welcome to the Extension")

//  /**
//  * Searches the specified DOM tree for an element with the specified pattern highlighter ID.
//  * @param {Node} dom  The element with the searched ID or `null` if no element with the ID was found.
//  */
// function addPhidForEveryElement(dom) {
//     // Create a counter as a static local variable that is initialized once and then reused.
//     this.counter = this.counter || 0;
//     // Iterate over all the individual DOM nodes.
//     for (const node of dom.querySelectorAll("*")) {
//         // Add a pattern highlighter ID as a custom attribute if there is none already.
//         if (!node.dataset.phid) {
//             node.dataset.phid = this.counter;
//             // Increment the ID counter.
//             this.counter += 1;
//         }
//     }
// }

// console.log("hello")
// console.log(dom)
// /**
//  * Searches the specified DOM tree for an element with the specified pattern highlighter ID.
//  * @param {Node} dom The DOM tree in which to search for the element.
//  * @param {number} id The ID of the element to search for.
//  * @returns {(Element|null)} The element with the searched ID or `null` if no element with the ID was found.
//  */
// function getElementByPhid(dom, id) {
//     // Return the element on the page with the pattern highlighter ID of `id`.
//     return dom.querySelector(`[data-phid="` + id + `"]`)
// }

// /**
//  * Removes all elements on the `tagBlacklist` from the specified DOM tree.
//  * @param {Node} dom The DOM tree from which the elements will be removed.
//  */
// function removeBlacklistNodes(dom) {
//     // Iterate over all elements on the page with a tag from the `tagBlacklist`.
//     for (const elem of dom.querySelectorAll(constants.tagBlacklist.join(","))) {
//         // Remove the element from the DOM.
//         elem.remove();
//     }
// }
// // This function detects the countdown timer
// function detectCountdownTimer(node, nodeOld) {
//     // Countdowns should only be identified as such if they are actively running and not static.
//     // Therefore, it is necessary to check first if there is an old state of the element and if the text in it has changed.
//     if (nodeOld && node.innerText != nodeOld.innerText) {
//         /**
//          * Regular expression for a usual countdown with or without words.
//          * @constant
//          */
//         const reg = /(?:\d{1,2}\s*:\s*){1,3}\d{1,2}|(?:\d{1,2}\s*(?:days?|hours?|minutes?|seconds?|tage?|stunden?|minuten?|sekunden?|[a-zA-Z]{1,3}\.?)(?:\s*und)?\s*){2,4}/gi;

//         /**
//          * Regular expression for strings that match the regular expression for countdowns
//          * but are not countdowns because there are too many numbers.
//          * A maximum of 4 numbers for days, hours, minutes and seconds is expected.
//          * @constant
//          */
//         const regBad = /(?:\d{1,2}\s*:\s*){4,}\d{1,2}|(?:\d{1,2}\s*(?:days?|hours?|minutes?|seconds?|tage?|stunden?|minuten?|sekunden?|[a-zA-Z]{1,3}\.?)(?:\s*und)?\s*){5,}/gi;

//         // If matches for "wrong" countdowns are found with the second regular expression,
//         // remove these parts from the string.
//         // Then search for matches for real countdowns in the remaining string.
//         // Do this for the old and current state of the text.
//         let matchesOld = nodeOld.innerText.replace(regBad, "").match(reg);
//         let matchesNew = node.innerText.replace(regBad, "").match(reg);

//         // If no matches were found in one of the two states of the texts or
//         // if the number of matches in the two states does not match,
//         // the element is not classified as a countdown.
//         if (matchesNew == null || matchesOld == null ||
//             (matchesNew != null && matchesOld != null
//                 && matchesNew.length != matchesOld.length)) {
//             return false;
//         }

//         // Since it was ensured at the point that there are the same number of matches
//         // in both states of the text, it is initially assumed that the matches with the same index
//         // in both states are the same countdown.
//         for (let i = 0; i < matchesNew.length; i++) {
//             // Extract all contiguous numbers from the strings.
//             // Example: `"23:59:58"` -> `["23", "59", "58"]`.
//             let numbersNew = matchesNew[i].match(/\d+/gi);
//             let numbersOld = matchesOld[i].match(/\d+/gi);

//             // If the number of each number does not match,
//             // then the pair of countdowns does not match.
//             if (numbersNew.length != numbersOld.length) {
//                 // Ignore this pair and examine at the next one.
//                 continue;
//             }

//             // Iterate through all pairs of numbers in the strings.
//             for (let x = 0; x < numbersNew.length; x++) {
//                 // Since countdowns should be detected that are running down,
//                 // the numbers from left to right become smaller over time.
//                 // When the numbers are iterated from left to right,
//                 // at least one number in the current state of the text
//                 // should be smaller than in the old state.
//                 // If a number in the current state is larger before a number
//                 // is smaller than in the previous state, it does not seem to be an elapsing countdown.
//                 // Examples: current state - previous state -> result
//                 //           23,30,40      - 23,30,39       -> is a countdown
//                 //           23,30,00      - 23,29,59       -> is a countdown
//                 //           23,30,40      - 23,31,20       -> is not a countdown
//                 //           23,30,40      - 23,30,41       -> is not a countdown
//                 //           23,30,40      - 23,30,40       -> is not a countdown
//                 if (parseInt(numbersNew[x]) > parseInt(numbersOld[x])) {
//                     // If the number in the current state is larger,
//                     // break out of the loop and examine the next pair, if present.
//                     // This case occurs only if the second if-clause did not occur and `true` was returned.
//                     break;
//                 }
//                 if (parseInt(numbersNew[x]) < parseInt(numbersOld[x])) {
//                     // Return `true` if a number has decreased.
//                     console.log("eurekaaaaaaaa")
//                     return true;
//                 }
//             }
//         }
//     }
//     // Return `false` if no countdown was detected by the previous steps.
//     return false;
// }

// // Call the countdown detection function
// const countdownFound = detectCountdownTimer(/* pass your nodes here */);

// // Update the popup content based on the result
// updatePopupContent(countdownFound);

// // Additional code...

// function updatePopupContent(countdownFound) {
//     // Your existing code for updating the popup content
//     // ...

//     if (countdownFound) {
//         // Update the popup content based on countdown detection result
//     } else {
//         // Update the popup content based on no countdown detected
//     }
// }




























// // contentScript.js

// // Function to check if an element represents a countdown.
// function isCountdownElement(element) {
//     // Modify this function based on the structure of the target website.
//     // This example checks if the element has a numeric value and the word 'time'.
//     const numericValue = parseFloat(element.textContent.trim());
//     return !isNaN(numericValue) && element.textContent.toLowerCase().includes('time');
// }

// // Function to handle the detected countdown element.
// function handleCountdown(countdownElement) {
//     // Modify this function based on how you want to handle the countdown.
//     console.log('Detected Countdown:', countdownElement.textContent);
//     // Add your custom logic here, such as highlighting or interacting with the countdown.
// }

// // Function to process a single node for countdown detection.
// function processNode(node) {
//     if (isCountdownElement(node)) {
//         // Handle the detected countdown element.
//         handleCountdown(node);
//     }
// }

// // Function to process mutations in the DOM.
// function processMutations(mutations) {
//     mutations.forEach((mutation) => {
//         // Check added nodes for potential countdown elements.
//         mutation.addedNodes.forEach((node) => {
//             processNode(node);
//         });

//         // Check modified nodes for potential countdown elements.
//         if (mutation.type === 'characterData') {
//             processNode(mutation.target);
//         }
//     });
// }

// // Create a MutationObserver to watch for changes in the DOM.
// const observer = new MutationObserver(processMutations);

// // Options for the MutationObserver.
// const observerOptions = {
//     childList: true, // Watch for changes in the child nodes (added/removed nodes).
//     subtree: true, // Watch for changes in the entire subtree of the target node.
//     characterData: true, // Watch for changes in the data of text nodes.
// };

// // Start observing the DOM with the specified options.
// observer.observe(document.body, observerOptions);

// // Log a message to indicate that the content script is running.
// console.log('Countdown Detection Content Script is running...');

// // Log a message when the page is loaded to indicate that the script is active.
// console.log('Content Script: Page Loaded');

// // Log a message when no countdown is found after a delay.
// setTimeout(() => {
//     console.log('No countdown elements found on the page.');
// }, 5000); // Adjust the delay as needed.
















// // // Function to check if an element contains time-related text and has a timer-like behavior.
// // function isTimerElement(element) {
// //     const textContent = element.textContent.toLowerCase();
// //     const hasMins = textContent.includes('mins');
// //     const hasSecs = textContent.includes('secs');
// //     const hashrs = textContent.includes('hrs');

// function isTimerElement(node, nodeOld) {
//     // Countdowns should only be identified as such if they are actively running and not static.
//     // Therefore, it is necessary to check first if there is an old state of the element and if the text in it has changed.
//     if (nodeOld && node.innerText !== nodeOld.innerText) {
//         /**
//          * Regular expression for detecting countdown timers with or without words.
//          * Updated to include the format "2 hrs 53 mins".
//          * @constant
//          */
//         const timerRegex = /(?:\d{1,2}\s*:\s*){1,3}\d{1,2}|(\d+)\s*(hrs?|hours?)\s*(\d+)\s*(mins?|minutes?)/gi;

//         // Extract timer matches from the current and old states of the text
//         const matchesNew = node.innerText.match(timerRegex);
//         const matchesOld = nodeOld.innerText.match(timerRegex);

//         // If no matches were found in one of the two states of the texts or
//         // if the number of matches in the two states does not match,
//         // the element is not classified as a countdown.
//         if (!matchesNew || !matchesOld || matchesNew.length !== matchesOld.length) {
//             console.log('Timer not found');
//             return false;
//         }

//         // Since it was ensured at this point that there are the same number of matches
//         // in both states of the text, it is initially assumed that the matches with the same index
//         // in both states are the same countdown.
//         for (let i = 0; i < matchesNew.length; i++) {
//             // Extract numbers and units from the strings.
//             const [, hoursNew, unitHours, minutesNew, unitMinutes] = matchesNew[i].match(/(\d+)\s*(hrs?|hours?)\s*(\d+)\s*(mins?|minutes?)/i) || [];
//             const [, hoursOld, unitHoursOld, minutesOld, unitMinutesOld] = matchesOld[i].match(/(\d+)\s*(hrs?|hours?)\s*(\d+)\s*(mins?|minutes?)/i) || [];

//             // If any essential parts are missing, skip to the next match.
//             if (!hoursNew || !unitHours || !minutesNew || !unitMinutes || !hoursOld || !unitHoursOld || !minutesOld || !unitMinutesOld) {
//                 continue;
//             }

//             // Ensure that the units are consistent (both hours and minutes).
//             if (unitHours.toLowerCase() === 'hr' && unitMinutes.toLowerCase() === 'min' &&
//                 unitHoursOld.toLowerCase() === 'hr' && unitMinutesOld.toLowerCase() === 'min') {
//                 const totalMinutesNew = parseInt(hoursNew) * 60 + parseInt(minutesNew);
//                 const totalMinutesOld = parseInt(hoursOld) * 60 + parseInt(minutesOld);

//                 // If the total minutes are decreasing, return true.
//                 if (totalMinutesNew < totalMinutesOld) {
//                     console.log('Timer found');
//                     return true;
//                 }
//             }
//         }
//     }

//     // Return `false` if no countdown was detected by the previous steps.
//     console.log('Timer not found');
//     return false;
// }

// // Rest of your code remains unchanged...

// // Function to handle the detected timer element.
// function handleTimer(timerElement) {
//     console.log('Found Timer Element:', timerElement.textContent);

//     // Send a message to the background script or other parts of the extension.
//     chrome.runtime.sendMessage({ timerFound: true });

//     // Add your custom logic here.
// }

// // Function to process a single node for timer detection.
// function processNode(node) {
//     if (isTimerElement(node)) {
//         // Handle the detected timer element.
//         handleTimer(node);
//     }
// }

// // Function to process mutations in the DOM.
// function processMutations(mutations) {
//     mutations.forEach((mutation) => {
//         // Check added and modified nodes for potential timer elements.
//         const nodesToCheck = [...mutation.addedNodes, mutation.target];
//         nodesToCheck.forEach((node) => {
//             processNode(node);
//         });
//     });
// }

// // Create a MutationObserver to watch for changes in the DOM.
// const observer = new MutationObserver(processMutations);

// // Options for the MutationObserver.
// const observerOptions = {
//     childList: true,
//     subtree: true,
//     characterData: true,
// };

// // Start observing the DOM with the specified options.
// observer.observe(document.body, observerOptions);

// // Log a message to indicate that the content script is running.
// console.log('Timer Detection Content Script is running...');

// // Log a message when the page is loaded to indicate that the script is active.
// console.log('Content Script: Page Loaded');
