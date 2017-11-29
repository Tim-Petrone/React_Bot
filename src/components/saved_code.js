import React, {Component} from 'react'

class Bad_robot extends Component {

  handleChange(e){
    this.props.SaySomething(e.target.value)
  };


  render() {

    var input = this.props.input
    var inputArray = input.split("")
    var test = inputArray.forEach(function(e){
      if (inputArray[e]%3==0){
        inputArray[e]== "B"
      } else if (inputArray[e]%3==1) {
        inputArray[e]== "l"
      } else {
        inputArray[e]=="a"
      }
    })
  };

  return(
    <div>
      <p>I hear you saying {this.test}. Is that correct?</p>
    </div>
  )
}

export default Bad_robot
