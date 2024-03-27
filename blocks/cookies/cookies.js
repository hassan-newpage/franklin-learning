export default async function decorate(block) {
    const allChildDiv = block.querySelectorAll('.cookies > div');
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.display = 'none'
    block.prepend(container);

    for (let i = 0; i < allChildDiv.length; i++) {
        allChildDiv[i].classList.add(`child-${i}`)
        container.appendChild(allChildDiv[i]);
    }

    const cookiesBtn = document.createElement('div');
    cookiesBtn.classList.add('cookies-btn');
    cookiesBtn.innerText = 'Cookies Preferences';
    block.appendChild(cookiesBtn);

    const closeBtn = container.querySelector('.child-0 div:nth-child(2)');
    closeBtn.classList.add('close-btn');

    closeBtn.addEventListener("click", function () {
        container.style.display = 'none';
        const windowWidth = window.innerWidth;
        document.querySelector('body').style.overflow = 'scroll';
        if (windowWidth < 620) {
            document.querySelector('.inlyta-home').style.display = 'block';
        }
    });

    cookiesBtn.addEventListener('click', () => {
        container.style.display = 'block';
        window.scrollTo(0, 0);
        const windowWidth = window.innerWidth;
        document.querySelector('body').style.overflow = 'hidden';
        if (windowWidth < 620) {
            document.querySelector('.inlyta-home').style.display = 'none';

        }
    });

    const child4 = container.querySelector('.child-4');
    child4.addEventListener('click', () => {
        container.style.display = 'none';
    });

    const child3 = container.querySelector('.child-3');

    const switchLabel = document.createElement('label');
    switchLabel.classList.add('switch');
    switchLabel.setAttribute('for', 'toggleSwitch');

    const switchInput = document.createElement('input');
    switchInput.setAttribute('type', 'checkbox');
    switchInput.setAttribute('id', 'toggleSwitch');

    const sliderSpan = document.createElement('span');
    sliderSpan.classList.add('slider', 'round');

    switchLabel.appendChild(switchInput);
    switchLabel.appendChild(sliderSpan);

    child3.appendChild(switchLabel);

    switchInput.addEventListener('change', function () {
        if (this.checked) {
            sliderSpan.style.backgroundColor = '#2196F3';

        } else {
            sliderSpan.style.backgroundColor = '#ccc';
        }
        console.log("Toggle Switch State:", this.checked);
    });
    const child3content = child3.querySelector('div:nth-child(2)').style
    child3content.display = 'none';
    child3.addEventListener('click', () => {
        if (child3content.display == 'none') {
            child3content.display = 'block';
        }
        else {
            child3content.display = 'none';
        }
    })
}
