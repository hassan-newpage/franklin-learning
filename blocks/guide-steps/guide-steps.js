export default async function decorate(block) {
    // Find the parent div
    const parentDiv = document.querySelector('.guide-steps');

    // Select the first and second child divs
    const firstChildDiv = parentDiv.children[0];
    const secondChildDiv = parentDiv.children[1];

    // Create the hr element
    const hrElement = document.createElement('hr');

    // Insert the hr element after the first child div
    firstChildDiv.insertAdjacentElement('afterend', hrElement.cloneNode());

    // Insert the hr element after the second child div
    secondChildDiv.insertAdjacentElement('afterend', hrElement.cloneNode());

}