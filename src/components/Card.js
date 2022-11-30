import React from "react";

class Card extends React.Component{
    render(){
        const robotsInfo = this.props
        return(
            <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${robotsInfo.id}?200x200`}/>
                <h2>{robotsInfo.name}</h2>
                <p>{robotsInfo.email}</p>
            </div>
            
        )
    }
}
export default Card