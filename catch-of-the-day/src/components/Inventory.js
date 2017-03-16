import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        // This is passing the addFish function defined in the App component 
        // down to the AddFishForm component
        <AddFishForm addFish={this.props.addFish} />
      </div>
    )
  }
}

export default Inventory;
