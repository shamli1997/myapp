import React, { Component } from 'react'
import { Provider } from 'react-redux';
import './App.css';
import store from './Component/store'
import Card from './Card'
import DisplayBalance from './Component/DisplayBalance';
import StatementTable from './Component/StatementTable';
import WithdrawDeposite from './Component/WithdrawDeposite';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//       warning: false
//     };

//   }

//   decrement = () => {
//     const { counter } = this.state;
//     if (counter > 0) {
//       this.setState({ counter: counter - 1, warning: false })
//     } else {
//       this.setState({ warning: true })
//     }
//   }
//   render() {
//     const { counter, warning } = this.state
//     return (
//       <div className="App" data-test="component-app">
//         <h1 data-test="counter-display">Counter is Currently : {this.state.counter}</h1>
//         <button data-test="increment-button"
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >Increment counter</button>
//         <button data-test="decrement-button"
//           onClick={() => this.decrement()}
//         >Decrement counter</button>
//         {warning && <p data-test="warning-display">It can not be negative</p>}

//       </div>

//     );
//   }

// }

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WithdrawDeposite />
        <DisplayBalance />
        <StatementTable />

      </div>
    </Provider>
  )
}

export default App;
