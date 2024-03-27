export default function decorate(block) {
    // console.log('diagnosis', block);
    const allChild = block.querySelectorAll('.diagnosis > div');
    for (let i = 0; i < allChild.length; i++) {
        allChild[i].classList.add(`child-${i}`)
    }
}