const experienceContainer = document.querySelector('.experience-container');
const input1 = document.querySelector('.experience input');

var tagss = [];

function createTags(label1) {
  const div1 = document.createElement('div'); 
  div1.setAttribute('class', 'tagg');
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

function clearTagss() {
  document.querySelectorAll('.tagg').forEach(function(tagg) {
    tagg.parentElement.removeChild(tagg);
  })
}

function addTagss() {
  clearTagss();
  tagss.slice().reverse().forEach(function(tagg){
      const input1 = createTags(tagg)
      experienceContainer.prepend(input1);
  })
}

input1.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        tagss.push(input1.value); 
        addTagss();
      input1.value = ''; 
    }
})
document.addEventListener('click', function(e){ 
  if (e.target.tagName === 'I') {
    const value1 = e.target.getAttribute('data-item');
    const index1 = tagss.indexOf(value1);
    tagss = [...tagss.slice(0, index1), ...tagss.slice(index1+1)];
    console.log(tagss)
    addTagss();    
  }
})