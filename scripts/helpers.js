export function addSectionInnerWrapperDiv(blockElement) {
    const parentSection = blockElement.closest('.section');
    const childrenDivs = parentSection.children;
    if (childrenDivs.length <= 1) {
      return;
    }
  
    const innerWrapperDiv = createTag('div', { class: 'blocks-wrapper' }, '');
    [...parentSection.children].forEach((child) => innerWrapperDiv.appendChild(child));
    parentSection.append(innerWrapperDiv);
  }