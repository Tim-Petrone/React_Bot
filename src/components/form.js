import React, {Component} from 'react'

class Form extends Component {

  handleChange(e){
    this.props.SaySomething(e.target.value)
  }

  render() {
    return(
      <div>
        <p>Say Something</p>
        <input type='text' value={this.props.input} onChange={this.handleChange.bind(this)} />
        <p>{this.props.input}</p>
      </div>
    );
  }
}
export default Form
