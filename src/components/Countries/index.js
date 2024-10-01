import {Component} from 'react'
import VisitedCountries from '../VisitedCountries'
import './index.css'

class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      visitedList: [],
    }
  }

  onClickVisitButton = event => {
    const id = event.target.value
    this.setState(prevState => {
      const updatedList = prevState.list.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, isVisited: !eachItem.isVisited}
          : eachItem,
      )
      return {
        list: updatedList,
        visitedList: [
          ...prevState.visitedList,
          updatedList.find(eachItem => eachItem.id === id),
        ],
      }
    })
  }

  onClickRemoveButton = id => {
    this.setState(prevState => {
      const updatedList = prevState.list.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, isVisited: !eachItem.isVisited}
          : eachItem,
      )

      return {
        list: updatedList,
        visitedList: prevState.visitedList.filter(
          eachItem => eachItem.id !== id,
        ),
      }
    })
  }

  sortVisitedList = visitedList =>
    visitedList.sort((a, b) => a.name.localeCompare(b.name))

  render() {
    const {list} = this.state
    const visited = list.filter(eachItem => eachItem.isVisited === true)
    console.log(visited)
    return (
      <div className="app-container">
        <h1 className="main-heading">Countries</h1>
        <ul className="countries-container">
          {list.map(eachItem => (
            <li className="list-style" key={eachItem.id}>
              <div className="list-content-container">
                <p className="country-name">{eachItem.name}</p>
                {eachItem.isVisited ? (
                  <p>Visited</p>
                ) : (
                  <button
                    type="button"
                    className="button-style"
                    value={eachItem.id}
                    onClick={this.onClickVisitButton}
                  >
                    Visit
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        <h1 className="main-heading">Visited Countries</h1>
        {visited.length === 0 ? (
          <p>No Countries Visited Yet!</p>
        ) : (
          <ul className="visited-countries-container-outer">
            {list.map(eachItem =>
              eachItem.isVisited ? (
                <VisitedCountries
                  key={eachItem.id}
                  country={eachItem}
                  onClickRemoveButton={this.onClickRemoveButton}
                />
              ) : (
                ''
              ),
            )}
          </ul>
        )}
      </div>
    )
  }
}

export default Countries
