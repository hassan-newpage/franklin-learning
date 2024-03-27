export default function decorate(block) {
  const hero = block.querySelector('div:first-child');
  hero.classList.add('hero-container');
  const video = hero.querySelector('div:nth-child(2)');

  video.innerHTML =
    `<video controls>
  <source src="${video.innerText}" type="video/mp4">
  Your browser does not support the video tag.
  </video>`;

  // button functions

  const viewContainer = block.querySelector('.hero-banner > div:nth-child(2)');
  viewContainer.classList.add('view-container');

  const viewBtn = block.querySelector('.view-container div:first-child p:first-child');

  const hideBtn = block.querySelector('.view-container div:first-child p:nth-child(2)');
  const ContentDiv = block.querySelector('.view-container div:nth-child(2)');
  const closeBtn = block.querySelector('.view-container div:nth-child(2) p:nth-last-child(1)');
  console.log('%c [ closeBtn ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', closeBtn)

  viewBtn.addEventListener('click', () => {
    hideBtn.style.display = 'block';
    ContentDiv.style.display = 'block';
    viewBtn.style.display = 'none';
    viewContainer.classList.add('active');

  });

  hideBtn.addEventListener('click', () => {
    hideBtn.style.display = 'none';
    ContentDiv.style.display = 'none';
    viewBtn.style.display = 'block';
    viewContainer.classList.remove('active');

  });

  closeBtn.addEventListener('click', () => {
    hideBtn.style.display = 'none';
    ContentDiv.style.display = 'none';
    viewBtn.style.display = 'block';
    viewContainer.classList.remove('active');
  });

}