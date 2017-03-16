import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    // first make a copy
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes }); // In ES6, { fishes } is the same thing as { fish: fishes }
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // Take a copy of our state
    const order = {...this.state.order};

    // Update or add the new number of fish ordered
    // if the key is undefined, order[key] + 1 will return NaN, so the second
    // part of the || will return 1
    order[key] = order[key] + 1 || 1;

    // Update our state
    this.setState({ order });
  }

  // In the Fish component below, key is for React, you can't access it. That's
  // why we're using our own prop, index, to pass along the key.

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="Menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            { 
              Object.keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order />
        { /* This will pass the addFirst function down to the child component */ }
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
