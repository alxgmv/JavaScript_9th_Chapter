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
let list = document.querySelector('ol');
list.onclick = function (event) {
  let target = event.target;
  target.classList.toggle('main_list_onclick');
};
