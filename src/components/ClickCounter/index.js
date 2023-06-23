// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCount extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button onClick={this.increaseCount} className="button" type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCount
