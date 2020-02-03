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
let crossedLi;
let list = document.querySelector('ol');
list.onclick = function (event) {
  let target = event.target;
  crossed(target);
};
function crossed(li) {
  crossedLi = li;
  if (crossedLi) {
    crossedLi.classList.toggle('main_list_onclick')
    // crossedLi.classList.add('main_list');
  } else {
    // crossedLi.classList.remove('main_list')
    crossedLi.classList.toggle('main_list_onclick');
  }
}
