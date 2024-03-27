export default async function decorate(block) {
    // Select the parent div with class 'ask-few-qn'
    const parentDiv = document.querySelector('.already-vaccinated');

    // Check if the parent div exists
    if (parentDiv) {
        // Select the second child div
        const secondChildDiv = parentDiv.querySelector('div:nth-child(2)');

        // Check if the second child div exists
        if (secondChildDiv) {
            // Create a new anchor tag
            const anchorTag = document.createElement('a');

            // Set the HTML content of the anchor tag to be the HTML content of the second child div
            anchorTag.textContent = secondChildDiv.textContent;
            anchorTag.setAttribute('href', 'https://adult.prevnar20.com/');

            // Replace the second child div with the anchor tag
            secondChildDiv.innerHTML = anchorTag.outerHTML;
        }
    }
}