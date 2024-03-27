export default function decorate(block) {

  if (!block) {
    console.log('Block doesnt exist');
    return;
  }
  const parentDiv = document.querySelector('.hide-show-button');
  const immediateChildDiv1 = parentDiv.children[0];
  const immediateChildDiv2 = parentDiv.children[1];
  immediateChildDiv1.classList.add('child1');
  immediateChildDiv2.classList.add('child2');
  const hideBtn = immediateChildDiv2.children[0];
  immediateChildDiv2.style.display = 'none';

  immediateChildDiv1.addEventListener('click', function () {
    immediateChildDiv1.style.display = 'none';
    immediateChildDiv2.style.display = 'block';

  });
  hideBtn.addEventListener('click', function () {
    immediateChildDiv1.style.display = 'block';
    immediateChildDiv2.style.display = 'none';
  });
  // console.log(immediateChildDiv1);
}