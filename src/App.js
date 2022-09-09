import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Seth',
      nameChanged: false,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, {this.state.name}.</p>
          <button
            onClick={() => {
              if(this.state.nameChanged){
                this.setState(
                  () => {
                  return { 
                    name: 'Seth',
                  };
                  }, 
                  () => {
                    console.log(this.state);
                  }
                );
                this.setState(
                  () => { 
                    return {
                      nameChanged: false 
                    }
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }
              else{
                this.setState(
                  () => {
                    return {
                      name: 'Harper' 
                    }
                  },
                  () => {
                    console.log(this.state);
                  }
                );
                this.setState(
                  () => {
                    return { 
                      nameChanged: true 
                    }
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }
              
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
