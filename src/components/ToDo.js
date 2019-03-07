import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
         {/* <input type="checkbox" checked={ this.props.isCompleted } /> */}
         <input
           type="checkbox" checked={this.props.isCompleted}
           onChange ={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         <button onClick = {this.props.deleteTodo} >delete </button>

         {/* <div className="item-remove-div">
           <button
            // className="item-remove"
            onClick={() => this.props.onDeleteList(todo)}>
            Remove
           </button>
          </div> */}
       </li>
    );
 }
}

export default ToDo;
