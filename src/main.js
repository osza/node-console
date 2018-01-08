document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('content');
  var form = document.getElementById('todos');
  var input = document.getElementById('todo');

  function addNote(note) {
    var element = document.createElement('div')
    element.innerHTML = note;
    element.className = 'note'
    content.appendChild(element);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var note = input.value;
    input.value = '';
    addNote(note);
  });
});
