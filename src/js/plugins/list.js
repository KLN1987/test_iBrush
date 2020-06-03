var books = document.querySelector('.books');
var feedbackArrow = document.querySelector('.feedback__arrow')

document.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('feedback__arrow')) {
    books.classList.toggle('hidden');
  } 
  if (target.classList.contains('input__books') || 
  target.classList.contains('label__books')) {
    books.classList.remove('hidden');
  }
  if (!target.closest('.feedback__books')) {
    books.classList.add('hidden');
  }
  if (!books.classList.contains('hidden')) {
    feedbackArrow.style.transform = 'none';
  } 
  if (books.classList.contains('hidden')) {
    feedbackArrow.style.transform = 'rotate(180deg)'; 
  }
})
