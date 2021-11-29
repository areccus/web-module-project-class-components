import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleClick = (e)=> {
    e.preventDefault();

    this.props.handleAddItem(this.state.input);
  }

  render() {

    return (
      <form>
        <input onChange={this.handleChanges} type="text"  placeholder="...todo" name="item" />
        <button onClick={this.handleClick}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;