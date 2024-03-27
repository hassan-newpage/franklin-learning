export default async function decorate(block) {
    const plus = block.querySelector('.read-important div:first-child div:first-child');
    plus.classList.add('plus');
    const readImp = block.querySelector('div div:nth-child(2)');
    const learnMore = block.querySelector('div div:nth-child(3)');
    readImp.classList.add('read-imp');
    readImp.appendChild(learnMore);

    const anchor = readImp.querySelector('a');
    anchor.setAttribute('undefind', 1);
}