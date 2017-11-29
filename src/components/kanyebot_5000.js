import React, {Component} from 'react'

class Kanyebot_5000 extends Component {
  handleChange(e){
    this.props.SaySomething(e.target.value)
  }

  render() {
    return(
      <div>
        <p>I am gonna let you finish but Beyonce is {this.props.input}. </p>
      </div>
    )
  }
}
export default Kanyebot_5000
