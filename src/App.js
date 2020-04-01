/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

//React as a function - Started model
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App.js was edited.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


import React, {Component} from 'react';
import logo from './logo.svg';

//Import files 
import './App.css';
/* Search box will be responsible only for the search box */
import {SearchBox} from './components/search-box/search-box.component'
/* The card list is responsible to create this cards*/
import {CardList} from './components/card-list/card-list.component';
//import { findAllInRenderedTree } from 'react-dom/test-utils';

/* - React as a class
This app component is responsible for mapping over that list of monsters and
create this elements
*/
class App extends Component {  
  constructor(){
    super();

    this.state = { 
      monsters: [],
      searchField: ''
     };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState( {searchField: e.target.value} )
  }

  render(){
    
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return(
      <div className="App">
        
        <img src={logo} className="App-logo" alt="logo" />  

        <h1> Monster Search </h1>

        <SearchBox
          placeHolder='search monsters'
          handleChange={this.handleChange} 
        />

        <CardList monsters={filteredMonsters}/>            
    </div>
    )
  }
}

export default App;
