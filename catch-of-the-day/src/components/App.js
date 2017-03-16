import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="Menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        // This will pass the addFirst function down to the child component
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
