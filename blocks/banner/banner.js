
export default async function decorate(block) {
    const ParentDiv = block.querySelector('.banner.block > div:first-child');
    const firstDiv = block.querySelector('.banner.block > div > div:first-child');
    firstDiv.classList.add('text-holder');
    ParentDiv.classList.add('parent-container');
}
