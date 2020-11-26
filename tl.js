/*var inputTodo = document.getElementById('inputTodo');
inputTodo.value = "";

var addButton = document.getElementById('add');

var ul = document.getElementsByTagName('ul')[0];

addButton.addEventListener('click',
    function(e){
        var todo = document.createElement('li');
        todo.classList.add('li');
        todo.innerText = inputTodo.value;
        ul.prepend(todo);
        document.getElementById('inputTodo').value = "";

        var clearButton = document.createElement('input');
        var todo = document.createElement('li');
    }
);*/
var inputTodo = document.getElementById('inputTodo');
//clearing input after refreshing:
inputTodo.value = "";
//whole ul
var ul = document.getElementsByTagName('ul')[0];

var addButton = document.getElementById('add');
addButton.addEventListener('click', addToList);

function addToList(e) {
  //create new checkbox element with value from input
  var newTodo = document.createElement('input');
  newTodo.type = 'checkbox';

  //create label and write newTodo there
  var label = document.createElement('label');
  label.innerText = inputTodo.value;
  // console.log(newTodo);

  //create new delete button
  var newDelBtn = document.createElement('input');
  newDelBtn.type = 'button';
  newDelBtn.classList.add('delete');
  newDelBtn.value = 'x';

  //create new list
  var newlist = document.createElement('li');
  newlist.classList.add('li');

  //place new del button, checkbox and label in the new list
  newlist.appendChild(newDelBtn);
  newlist.appendChild(newTodo);
  newlist.appendChild(label);

  //add new list in ul
  ul.prepend(newlist);
  //cler the input after adding a list
  inputTodo.value = "";
  //DELETE button erases the list
  newDelBtn.addEventListener('click', function (e) {
    let parentList = e.target.parentElement;
    parentList = ul.removeChild(parentList);
  });

  newTodo.addEventListener('change', function (e) {
    if (this.checked) {
      let parentList = e.target.parentElement;
      //get label of checked todo
      let textOfchecked = parentList.getElementsByTagName('label')[0];
      textOfchecked.style.textDecoration = 'line-through';
      textOfchecked.style.color = 'gray';
      ul.removeChild(e.target.parentElement);
      ul.appendChild(parentList);

    } else {
      let parentList = e.target.parentElement;
      let textOfchecked = e.target.parentElement.getElementsByTagName('label')[0];
      textOfchecked.style.textDecoration = 'none';
      textOfchecked.style.color = 'black';
      ul.removeChild(e.target.parentElement);
      ul.prepend(parentList);
    }
  });

}

// var delButtonsList = document.querySelectorAll('.delete');

// delButtonsList.forEach( button => {
//     button.addEventListener('click', function(e){
//         var parentList = e.target.parentElement;
//         console.log(parentList);
//     });
// });

