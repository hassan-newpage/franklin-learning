export default function decorate(block) {
    console.log('topnav', block);
    const topNavContainer = document.querySelector('.top-nav');
    const navData = Array.from(topNavContainer.children);
    const hamburgerMenu = navData[0].querySelector('div:nth-child(2)');
    const closeBar = navData[0].querySelector('div:nth-child(3)');
    hamburgerMenu.classList.add('hamberger-menu');
    closeBar.classList.add('close-bar');

    console.log(closeBar);

    // Clear the existing content
    topNavContainer.innerHTML = '';

    navData.forEach((navItem, index) => {
        const navHeader = document.createElement('div');
        navHeader.classList.add('nav-header');


        if (index == 5) {
            navHeader.classList.add('right-img');
            navHeader.addEventListener('click', () => {
                window.location.href = `https://www.inlyta.com/sign-up`
            })
        }
        navHeader.innerHTML = navItem.children[0].innerHTML;

        if (navItem.children.length > 1) {
            const dropdown = document.createElement('div');
            dropdown.classList.add('dropdown');

            for (let i = 1; i < navItem.children.length; i++) {
                const dropdownItem = document.createElement('a');
                dropdownItem.href = navItem.children[i].tagName.toLowerCase() === 'a' ? navItem.children[i].href : '#';
                dropdownItem.textContent = navItem.children[i].textContent || navItem.children[i].innerHTML;
                dropdown.appendChild(dropdownItem);
            }

            navHeader.appendChild(dropdown);
        }

        topNavContainer.appendChild(navHeader);

        if (index > 0) {

            navHeader.classList.add('nav-title')
            // Add event listener for hover effect`
            navHeader.addEventListener('mouseenter', () => {
                const dropdown = navHeader.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.style.display = 'block';
                }
            });

            navHeader.addEventListener('mouseleave', () => {
                const dropdown = navHeader.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.style.display = 'none';
                }
            });
        }

        if (index == 0) {
            navHeader.classList.add('left-img');
        }

    });

    const leftimgcontainer = block.querySelector('.left-img');
    leftimgcontainer.appendChild(hamburgerMenu);
    leftimgcontainer.appendChild(closeBar);

    closeBar.style.display = 'none';

    hamburgerMenu.addEventListener('click', () => {
        closeBar.style.display = 'block';
        hamburgerMenu.style.display = 'none';
        const navTitle = block.querySelectorAll('.nav-title');
        navTitle.forEach(element => {
            element.style.display = 'block';
        });
    });

    closeBar.addEventListener('click', () => {
        closeBar.style.display = 'none';
        hamburgerMenu.style.display = 'block';
        const navTitle = block.querySelectorAll('.nav-title');
        navTitle.forEach(element => {
            element.style.display = 'none';
        });
    });
}