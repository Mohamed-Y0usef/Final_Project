const experienceContainer = document.querySelector('.experience-container');
const input1 = document.querySelector('.experience input');

var tagss = [];

function createTag(label1) {
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'tag');
  const span1 = document.createElement('span');
  span1.innerHTML = label1;
  const closeIcon1 = document.createElement('i');
  closeIcon1.setAttribute('class', 'material-icons');
  closeIcon1.setAttribute('data-item', label1);
  closeIcon1.innerHTML = 'close';

  div1.appendChild(span1);
  div1.appendChild(closeIcon1);
  return div1; 
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(function(tag) {
    tag.parentElement.removeChild(tag);
  })
}

function addTags() {
  clearTags();
  tagss.slice().reverse().forEach(function(tag){
      const input1 = createTag(tag)
      experienceContainer.prepend(input1);
  })
}

input1.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        tagss.push(input1.value); 
        addTags();
      input1.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const value1 = e.target.getAttribute('data-item');
    const index1 = tagss.indexOf(value1);
    tagss = [...tagss.slice(0, index1), ...tagss.slice(index1+1)];
    console.log(tagss)
    addTags();    
  }
})