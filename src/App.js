import { Component } from 'react';

import './App.css';

class App extends Component {
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
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
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

export default App;
