let accordion = document.querySelector('.accordion');
let openClass = 'open';

function openConetent(e) {
  e.preventDefault();
  e.stopPropagation();
  let target = e.target;
  if (e.type == 'click') {
    if (target.className == 'list__header') {
      let item = target.parentNode.parentNode;
      let content = item.querySelector('.link__content');
      content.classList.toggle(openClass);
    }
  }
}

accordion.addEventListener('click', openConetent);