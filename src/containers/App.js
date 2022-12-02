import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList'
// import {robots} from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'


function App (){
    const [robots, setRobots ]= useState([])
    const [searchField, setSearchField]= useState('')
    
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        return setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ?
        <h1 className='tc'>Loading </h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList  robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div >
        )
    
}


export default App