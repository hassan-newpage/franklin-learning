export default function decorate(block) {
  const metadata = block.closest('.section').dataset;
  const { type } = metadata;
  const blockItems = [...block.firstElementChild.children];
  const [contentLeft, contentRight] = blockItems;

  if (type === 'video') {
    contentLeft.innerHTML = `<video controls>
      <source src="${contentLeft.innerHTML}" type="video/mp4">
      Your browser does not support the video tag.
    </video>`;
  }
  block.innerHTML = `
        <div class="block-container">
          <div class='video-div'>
            ${contentLeft.innerHTML}
          </div>
          <div class="video-text">
            ${contentRight.innerHTML}
          </div>
    </div>`;
}
