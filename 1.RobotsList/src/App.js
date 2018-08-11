import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots.js';

const App = () => {
    return (
        <div className='tc'>
            <h1>RobotsList</h1>
            <Searchbox />
            <CardList robots={robots} />
        </div>

    );
}

export default App;