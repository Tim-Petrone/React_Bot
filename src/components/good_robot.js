import React, {Component} from 'react'

class Good_robot extends Component {

  handleChange(e){
    this.props.SaySomething(e.target.value)
  }

  render() {
    return(
      <div>
        <p>I hear you saying {this.props.input}. Is that correct?</p>
      </div>
    )
  }
}
export default Good_robot
