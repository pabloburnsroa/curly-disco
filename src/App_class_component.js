import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

// Class Component
class AppClass extends Component {
  // React will run the constructor method before anything else
  constructor() {
    super();
    // this.state = {
    //   name: { firstName: 'Pablo', lastName: 'Burns-Roa' },
    //   company: 'PBR',
    // };
    this.state = {
      error: null,
      isLoaded: false,
      monsters: [],
      searchField: '',
    };
    // console.log('Constructor');
  }

  componentDidMount() {
    // console.log('ComponentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users, isLoaded: true };
        })
      )
    );
  }

  // The class component will initialize this onSearchChange method once
  onSearchChange = (e) => {
    // console.log(e.target.value);
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructuring from state to clean up code, makes it easier to read.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // console.log('Render');

    const filteredUsers = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="search users"
          onChange={onSearchChange}
        /> */}
        <h1 className="app-title">App Users</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search-users"
        />
        {/* {filteredUsers.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        {/* Cardlist component only cares about displaying the users not the logic of filtering */}
        <CardList monsters={filteredUsers} />

        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName}, I work at {this.state.company}
          </p>
          We can bind event handlers to elements. Pass a callback function in onClick. 
          <button
            onClick={() => {
              // setState will update the object in memory so react will re-render the state.
              this.setState({ name: { firstName: 'James', lastName: 'Doe' } });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
          <button
            onClick={() => {
              this.setState(
                // first function to update state
                () => {
                  return {
                    name: { firstName: 'Andrei', lastName: 'Doe' },
                  };
                },
                // second callback function that will run once new state has been applied
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header> */}
      </div>
    );
  }
}

export default AppClass;
