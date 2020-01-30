let btn = document.querySelector('.btn');
let content = document.querySelector('.main_list');
btn.addEventListener('click', function() {
  let newTask = document.querySelector('input').value;
  if (newTask != '') {
    let liNew = document.createElement('li');
    liNew.innerText = newTask;
    console.log(liNew);
    content.appendChild(liNew);
  } else {
    alert('Empty input!')
  }
})
// for ( i = 0; i < content.children.length; i++ ) {
//   let elements = document.querySelector('.content');
//   elements.children.innerText.onclick = function() {
//     elements.children[i].classList.toggle('main_list_onclick');
//   }
// }
