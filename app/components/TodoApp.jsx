var React = require('react');
var TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
