import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearch = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobot = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>Tracker</h1>
                <SearchBox onSearch={this.onSearch}/>
                <Scroll>
                    <CardList robots={filteredRobot}/>
                </Scroll>
            </div>
        );
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }
}

export default App;
