window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});

NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
}

function deactivateSelect(select) {

  // If the widget is not active there is nothing to do
  if (!select.classList.contains('active')) return;

  // We need to get the list of options for the custom widget
  var optList = select.querySelector('.optList');

  // We close the list of option
  optList.classList.add('hidden');

  // and we deactivate the custom widget itself
  select.classList.remove('active');
}

// This function will be used each time the user wants to (de)activate the widget
// It takes two parameters:
// select : the DOM node with the `select` class to activate
// selectList : the list of all the DOM nodes with the `select` class
function activeSelect(select, selectList) {

  // If the widget is already active there is nothing to do
  if (select.classList.contains('active')) return;

  // We have to turn off the active state on all custom widgets
  // Because the deactivateSelect function fulfill all the requirement of the
  // forEach callback function, we use it directly without using an intermediate
  // anonymous function.
  selectList.forEach(deactivateSelect);

  // And we turn on the active state for this specific widget
  select.classList.add('active');
}

// This function will be used each time the user wants to open/closed the list of options
// It takes one parameter:
// select : the DOM node with the list to toggle
function toggleOptList(select) {

  // The list is kept from the widget
  var optList = select.querySelector('.optList');

  // We change the class of the list to show/hide it
  optList.classList.toggle('hidden');
}

// This function will be used each time we need to highlight an option
// It takes two parameters:
// select : the DOM node with the `select` class containing the option to highlight
// option : the DOM node with the `option` class to highlight
function highlightOption(select, option) {

  // We get the list of all option available for our custom select element
  var optionList = select.querySelectorAll('.option');

  // We remove the highlight from all options
  optionList.forEach(function (other) {
    other.classList.remove('highlight');
  });

  // We highlight the right option
  option.classList.add('highlight');
};