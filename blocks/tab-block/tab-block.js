export default function decorate(block) {

    const header = block.querySelector('.tab-block > div:first-child');
    const content = block.querySelector('.tab-block > div:nth-child(2)');

    header.classList.add('tabs');
    header.querySelector('div:first-child').classList.add('active')
    content.setAttribute('id', 'panels');
    content.querySelector('div:first-child').classList.add('active');

    const allHeads = header.querySelectorAll('div');
    allHeads.forEach((div, index) => {
        div.classList.add('tab');

        div.addEventListener('click', function (event) {
            const tab = document.querySelectorAll(".tab");
            const panel = document.querySelectorAll(".panel");

            for (let i = 0; i < tab.length; i++) {
                tab[i].classList.remove("active");
            }

            for (let i = 0; i < panel.length; i++) {
                panel[i].classList.remove("active");
            }

            tab[index].classList.add('active')

            panel[index].classList.add('active');


        });
    });

    const allPanels = content.querySelectorAll('div');
    allPanels.forEach((div, index) => {
        div.classList.add('panel')
        div.classList.add(`panel-${index}`);

        const panelChildren = div.children;

        for (let i = 0; i < panelChildren.length; i++) {
            panelChildren[i].classList.add(`child-${i + 1}`);
        }
    });

    // Create a new div element
    const Container1 = document.createElement('div');
    const Container2 = document.createElement('div');
    const child3 = block.querySelector('.panel-0 .child-3');


    const child4 = block.querySelector('.panel-0 .child-4');
    const child5 = block.querySelector('.panel-0 .child-5');
    const child6 = block.querySelector('.panel-0 .child-6');

    Container2.appendChild(child4);
    Container2.appendChild(child5);
    Container2.appendChild(child6);

    Container1.appendChild(child3);
    Container1.appendChild(Container2);

    Container1.classList.add('co-pay')


    // Get the element with class "child-4"
    const child2Container = document.querySelector('.child-2');

    // Insert the new div after the element with class "child-4"
    child2Container.parentNode.insertBefore(Container1, child2Container.nextSibling);

}

