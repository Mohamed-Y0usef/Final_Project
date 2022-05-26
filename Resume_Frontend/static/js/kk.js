const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.container input');

var tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  closeIcon.innerHTML = 'close';

  div.appendChild(span);
  div.appendChild(closeIcon);
  return div; 
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(function(tag) {
    tag.parentElement.removeChild(tag);
  })
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(function(tag){
      const input = createTag(tag)
    tagContainer.prepend(input);
  })
}

input.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        tags.push(input.value); 
        addTags();
      input.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const value = e.target.getAttribute('data-item');
    const index = tags.indexOf(value);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    console.log(tags)
    addTags();    
  }
})