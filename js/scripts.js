// Function adding a new item to the list of items
function newItem(){
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
  
  // Function to cross out an item from the list of items on click
  li.on("click", function crossOut() {
    li.toggleClass("strike");
  });

  // Adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // Adding the css to delete
  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
  }

  // Adding the possibility to reorder the list
  $('#list').sortable();
}
