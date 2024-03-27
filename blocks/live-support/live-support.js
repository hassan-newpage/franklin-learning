export default function decorate(block) {

    const allContentChild = block.querySelectorAll('.live-support > div > div')
    block.querySelector('.live-support > div').classList.add('container')

    for (let i = 0; i < allContentChild.length; i++) {
        allContentChild[i].classList.add(`child-${i}`);
    }
    // console.log(block);
}