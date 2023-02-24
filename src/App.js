import React, { Component} from "react"
import CardList from "./cardlist"
// import {robot} from "./robot"
import SearchBox from "./searchBox"
import Scroll from "./scroll"

class App  extends Component {
    constructor ()  {
        super() 
        this.state = {
            robot: [],
            SearchFiled: "" 
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users =>  this.setState({robot: users}))  
       
    }

     onsearchChange =(event) => {
        this.setState({SearchFiled: event.target.value})
        
        // console.log(filterRobot)
    }
    render() {
        const filterRobot = this.state.robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchFiled.toLowerCase())
        })
        if(this.state.robot.length === 0) {
            return  <h1>Loading</h1>
        }
        else  {
            return (
                <div className="tc">
                  <h1>Robot Friend</h1>
                  <SearchBox searchchange={this.onsearchChange}/>
                  <Scroll>
                  <CardList robot={filterRobot}/>
                  </Scroll>
                  
                </div>
                  )
        }
       
    }


}
export default App