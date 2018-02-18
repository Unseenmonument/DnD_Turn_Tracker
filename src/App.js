import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      elements: [{
        id: 1,
        name: 'Player 1',
        initiative: 20,
      }, {
        id: 2,
        name: 'Player 2',
        initiative: 19,
      }, {
        id: 3,
        name: 'Player 3',
        initiative: 18,
      }, {
        id: 4,
        name: 'Player 4',
        initiative: 17,
      }],
    };
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
  }

  updateName(id, e) {
    const {value} = e.target;
    const elements = this.setState.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value; 
    this.setState({ elements })
  }

  updateInitiative(id, e) {
    clearTimeout(this.timeout_);
    const {value} = e.target;
    const elements = this.setState.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value); 
    this.setState({ elements });
    this.timout_ = setTimeout(() => this.sortElements, 500);
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.map(element =>
        <Card
          key={element.id}
          name={element.name}
          initiative={element.initiative}
          id={element.id}
          onNameChange={this.updateName}
          onInitiativeChange={this.updateInitiative}
        />
        )}        
      </div>
    );
  }
}

// commented out?
// <Card onChange={this.updateName} value={value} />
export default App;
