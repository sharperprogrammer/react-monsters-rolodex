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
                this.setState({ name: 'Seth' });
                this.setState({ nameChanged: false });
              }
              else{
                this.setState({ name: 'Harper' });
                this.setState({ nameChanged: true });
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
