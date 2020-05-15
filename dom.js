

var form = document.getElementById('addForm');
var itemList = document.getElementById("items");
var filter = document.getElementById('filter');

//Form Submit Event

form.addEventListener('submit', addItem);

//Filter addEventListener
filter.addEventListener('keyup', filterItems);

// Delete Event

itemList.addEventListener('click', removeItem);

function addItem(e) {

  e.preventDefault();

  //Get Input value
  var newItem = document.getElementById('item');
  //Create new LI

  var li = document.createElement('li');

  //Add class
  li.className = 'list-group-item';

  //Add TextNode with Input value
  li.appendChild(document.createTextNode(newItem.value));

  //CreateDeleteButton

  var deleteBtn = document.createElement('Button');

  //Add classes to delete button

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

  var y = deleteBtn.appendChild(document.createTextNode("X"));

  // Append Button to li
  li.appendChild(deleteBtn);




  itemList.appendChild(li);


}

// removeItem
function removeItem(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  //Convert text to lowercase

  var text = e.target.value.toLowerCase();

  //Get List
  var items = itemList.getElementsByTagName('li');

  //Convert to array
  Array.from(items).forEach(function(item) {
      var itemName = item.firstChild.textContent;

      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else{
        item.style.display = 'none';
      }


  


  });

}
