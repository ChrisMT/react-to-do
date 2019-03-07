import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {description: 'walk the dog', isCompleted: true},
        {description: 'wash dishes', isCompleted: false},
        {description: 'go on bikeride', isCompleted: false}
      ],
      newTodoDescription: ''
    };

  }

handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

handleSubmit(e) {
  e.preventDefault();
  //console.log('handleSubmit called');
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false};
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
}


  toggleComplete (index) {
    //console.log(index);
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  deleteTodo(name){
      const newTodos = this.state.todos.filter(todo => todo.description !== name)
      this.setState({
          todos: newTodos
      })
      console.log(newTodos);
  }


  // onDelete= (item) =>{
  //  // this.setState ({
  //  //   items: this.state.items.filter((i) => i.index !== item.index)
  //  // })
  //  this.state.items.splice(item, 1);
  //  this.setState({items: this.state.items});
 // }


  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map( (todo, index) =>
            // <ToDo key={ index }
            //   description={ todo.description }
            //   isCompleted={ todo.isCompleted } />
            // <ToDo key={ index }
            //   description={ todo.description }
            //   isCompleted={ todo.isCompleted }
            //   toggleComplete={ this.toggleComplete } />
            <ToDo key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={()=> this.deleteTodo(todo.description)}/>
            )}

            {/* <ToDo todos={this.state.todo}  onDeleteList={this.onDelete}/> */}

        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input
            type="text"
            value={ this.state.newTodoDescription}
            onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
