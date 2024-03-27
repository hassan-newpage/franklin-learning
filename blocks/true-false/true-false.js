export default function decorate(block) {
    const trueFalseContainer = block.querySelector('.true-false > div:nth-child(2) > div:nth-child(2)');
    trueFalseContainer.classList.add('true-false-container');

    const createRadioInput = (id) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = id;
        radioInput.id = id;
        radioInput.value = id;

        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = id;
        radioLabel.textContent = id;

        trueFalseContainer.appendChild(radioInput);
        trueFalseContainer.appendChild(radioLabel);

        return radioInput;
    };

    const trueBtn = createRadioInput('True');
    const falseBtn = createRadioInput('False');

    const defaultContent = block.querySelector('.true-false > div:nth-child(2)');
    defaultContent.classList.add('defaultContent');

    const trueContent = block.querySelector('.true-false > div:nth-child(3) > div');
    trueContent.classList.add('trueContent');
    trueContent.style.display = 'none';

    const falseContent = block.querySelector('.true-false > div:nth-child(4) > div');
    falseContent.classList.add('falseContent');
    falseContent.style.display = 'none';

    const toggleContent = (selectedBtn) => {
        defaultContent.style.display = 'none';
        trueContent.style.display = selectedBtn === trueBtn ? 'block' : 'none';
        falseContent.style.display = selectedBtn === falseBtn ? 'block' : 'none';
    };

    trueBtn.addEventListener('click', () => toggleContent(trueBtn));
    falseBtn.addEventListener('click', () => toggleContent(falseBtn));
}