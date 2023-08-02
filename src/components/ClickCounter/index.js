// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  buttonClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainContainer">
        <h1>
          The Button has been clicked
          <span className="counterStyle">{` ${count} `}</span>
          times
        </h1>
        <p className="caption">Click the button to increase the count!</p>
        <button
          type="button"
          onClick={this.buttonClicked}
          className="buttonStyle"
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
