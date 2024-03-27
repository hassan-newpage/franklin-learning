export default async function decorate(block) {
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 600;

  setupNavigation();
  setupDataTable(isMobile);

  if (isMobile) {
    setupAccordion();
  }
}

function setupNavigation() {
  const headerEle = document.querySelector('.inlyta-home-container');
  const firstNavData = headerEle.dataset.firstNav;
  const secondNavData = headerEle.dataset.secondNav;

  const leftNav = document.createElement('div');
  leftNav.classList.add('left-nav');
  leftNav.innerHTML = `
    <ul>
      <a href='#clinical-trail' onclick='btnclickedtest()'">${firstNavData}</a>
    </ul>
    <ul> 
      <a href='#side-effects-experienced-during-the-clinical-trial' onclick='btnclickedtest()'">${secondNavData}</a>
    </ul>
  `;

  const inlytaHome = document.querySelector('.inlyta-home div');
  inlytaHome.prepend(leftNav);

  const rightNav = document.querySelector('.inlyta-home > div:first-child > div:nth-child(2)');
  rightNav.classList.add('right-nav');
  rightNav.setAttribute("id", "clinical-trail");
  const children = rightNav.children;

  for (let i = 0; i < children.length; i++) {
    children[i].classList.add(`child-${i + 1}`);
  }
}

function setupDataTable(isMobile) {
  const dataDiv = document.querySelector('.inlyta-home > div:nth-child(2)');
  const dataTable = dataDiv.querySelector('table');
  dataTable.classList.add('data-table');

  const rightNav = document.querySelector('.inlyta-home > div:first-child > div:nth-child(2)');
  rightNav.appendChild(dataDiv);
}

function setupAccordion() {
  const tableRows = document.querySelectorAll('.data-table tbody tr:not(:first-child)');
  const headOne = document.querySelector('.data-table tbody tr:first-child td:nth-child(2)');
  const headTwo = document.querySelector('.data-table tbody tr:first-child td:nth-child(3) h1');

  tableRows.forEach(row => {
    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    const panelHeader = document.createElement('div');
    panelHeader.classList.add('panel');
    panelHeader.textContent = row.children[0].textContent;

    const panelContent = document.createElement('div');
    panelContent.classList.add('panel-content');

    const clonedHeadOne = headOne.cloneNode(true);
    const clonedHeadTwo = headTwo.cloneNode(true);
    panelContent.appendChild(clonedHeadOne);
    panelContent.appendChild(clonedHeadTwo);

    let plusSign = document.createElement('span');
    plusSign.innerText = `+`

    panelHeader.appendChild(plusSign);
    let minusSign = document.createElement('span');
    minusSign.innerText = `-`

    panelHeader.appendChild(minusSign);

    for (let i = 1; i < row.children.length; i++) {
      const contentItem = document.createElement('div');
      contentItem.textContent = row.children[i].textContent;
      panelContent.appendChild(contentItem);
    }

    accordion.appendChild(panelHeader);
    accordion.appendChild(panelContent);

    row.parentNode.replaceChild(accordion, row);

    panelHeader.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      document.querySelectorAll('.accordion .panel').forEach(panel => {
        panel.classList.remove('active');
        panel.nextElementSibling.classList.remove('active');
      });

      if (!isActive) {
        this.classList.add('active');
        panelContent.classList.add('active');
      }
    });
  });
}
