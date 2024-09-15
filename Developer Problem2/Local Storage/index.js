let h1 = document.querySelector('h1');
let blockButton = document.querySelector('#block');
let unblockButton = document.querySelector('#unblock');

// Add event listeners for block and unblock buttons
blockButton.addEventListener('click', () => {
    localStorage.setItem("block", true); // Set block status to true
    console.log("block", true); // Set block status to true
    show(); // Update the display
});

unblockButton.addEventListener('click', () => {
    localStorage.setItem("block", false); // Set block status to false
    console.log("block", false); // Set block status to false
    show(); // Update the display
});

// Function to show block/unblock status
const show = () => {
    // Get the block status from localStorage and check if it's "true" or "false"
    if (localStorage.getItem("block") === 'true') {
        h1.textContent = "Blocked";
    } else {
        h1.textContent = "Not Blocked";
    }
};

// Call the show function initially to reflect the current state
show();
