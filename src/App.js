import React, { Component } from 'react';
import './App.css';
import Card from './Card';

const randomId = () =>
  Math.random() = 100000; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      elements: [{
        id: 1,
        name: 'Player 1',
        initiative: 20,
        hitpoints: 10,
      }, {
        id: 2,
        name: 'Player 2',
        initiative: 19,
        hitpoints: 16,      
      }, {
        id: 3,
        name: 'Player 3',
        initiative: 18,
        hitpoints: 20, 
      }, {
        id: 4,
        name: 'Player 4',
        initiative: 17,
        hitpoints: 32,
      }],
    };
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
    this.updateHitpoints = this.updateHitpoints.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  updateName(id, e) {
    const { value } = e.target;
    const elements = this.setState.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value; 
    this.setState({ elements })
  }

  updateHitpoints(id, e) {
    const { value } = e.target;
    const elements = this.setState.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].hitpoints = Number(value); 
    this.setState({ elements })
  }

  updateInitiative(id, e) {
    clearTimeout(this.timeout_);
    const { value } = e.target;
    const elements = this.setState.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value); 
    this.setState({ elements });
    this.timout_ = setTimeout(() => this.sortElements(), 500);
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  addCard() {
    const { elements } = this.state;
    elements[elements.length] = {
      id: elements.length + 1,
      name: 'Player ${elements.length + 1}',
      initiative: -100,
      hitpoints: 12,
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    })
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        <button onClick={this.addCard}>Add</button>
        {elements.map(element =>
        <Card
          key={element.id}
          name={element.name}
          initiative={element.initiative}
          hitpoints={element.hitpoints}
          id={element.id}
          onNameChange={this.updateName}
          onInitiativeChange={this.updateInitiative}
          onHitpointsChange={this.updateHitpoints}
        />
        )}        
      </div>
    );
  }
}

// commented out?
// <Card onChange={this.updateName} value={value} />
export default App;
