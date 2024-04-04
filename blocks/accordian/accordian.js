export default function decorate(block) {
    const accordionSections = block.querySelectorAll('.accordian > div');

    accordionSections.forEach(section => {
        const header = section.firstElementChild;
        header.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });
}