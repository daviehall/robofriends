import React from 'react'




class SearchBox extends React.Component{
    render(){
        const searchChange = this.props.searchChange
        return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots' 
                onChange={searchChange}
                />
            </div>
        )
    }

}
export default SearchBox