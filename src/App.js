import React from 'react';
import Toolbar from './components/Toolbar';
import './App.css';

//Context permit to add a prop in the component tree without
// passing it explicitly in each components
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    // Use a Provider to pass theme lower in the tree
    // Every component can read it, no matter where it is located in the tree
    // Passing dark to the actual value
    return(
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

// No need to transmit explicitly the theme
function Toolbar = (props) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Define a contextType to read the actual theme context
  // React is gonna find the Provider of ancestral theme the most close and use its value
  // Actual theme in this example = 'dark'
  static contextType =ThemeContext;
  render () {
    return <Button theme={this.props.theme} />;
  }
}

export default App;
