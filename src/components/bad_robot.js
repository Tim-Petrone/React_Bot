import React, {Component} from 'react'


class Bad_robot extends Component {

  handleChange(e){
    this.props.SaySomething(e.target.value)
  };

  render() {
    var str = this.props.input
    return(
      <div>
        <p>I hear you saying {"bla ".repeat(str.length)}. Is that correct?</p>
      </div>
    )
  }
}
export default Bad_robot
