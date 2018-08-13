import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
        console.log('yes ' + event.target.value);
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.searchfield.toLowerCase());
        })
    }
    render () {
        return (
            <div className='tc'>
                <h1>RobotsList</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots} />
            </div>
    
        );
    }
}

export default App;