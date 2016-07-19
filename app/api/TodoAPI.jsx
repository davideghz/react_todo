var $ = require('jquery');
module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
      // if return true the item stays in the array, if return false
      // the item will be removed
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();

      return searchText.length === 0 || text.indexOf(searchText) > -1;
      // indexOf return -1 if the text is not found, or 0 if text is found
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1; // a before b
      } else if (a.completed && !b.completed) {
        return 1; // a after b
      } else {
        return 0; // no changes
      }
    });

    return filteredTodos;
  }
};
