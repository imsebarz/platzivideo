import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello como esb {name}</h1>
      </>
    );
  }
}

export default App;
