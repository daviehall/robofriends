import React from 'react'
import CardList from '../components/CardList'
// import {robots} from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'
import './App.css'



const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
        }
    }
    
    componentDidMount() {
        this.props.onRequestRobots()

    }

    render() {
        // const { robots } = this.state
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (isPending) {
            return <h1 className='tc'>Loading </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div >

            )
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App)