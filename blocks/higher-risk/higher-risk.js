export default async function decorate(block) {
    const divs = block.children;
    const classNames = ['first', 'second', 'third', 'fourth']; 
  
    Array.from(divs).forEach((div, index) => {
      div.classList.add(classNames[index] || '');
    });
  
    // console.log('risk', block);
  }
  