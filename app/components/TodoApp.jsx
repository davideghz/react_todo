var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos:[
        {
          id: 1,
          text: 'Pisciare il cane'
        },
        {
          id: 2,
          text: 'Scendere la spazzatura'
        },
        {
          id: 3,
          text: 'Chiamare la donna'
        },
        {
          id: 4,
          text: 'Chiavare la donna'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
