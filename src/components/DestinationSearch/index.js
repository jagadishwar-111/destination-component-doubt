import {Component} from 'react'
import './src/components/DestinationItem/index.js'
import './index.css'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <ul className="listContainer">
          <DestinationItem />
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
