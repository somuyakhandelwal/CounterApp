import React from 'react';

class Decrease extends React.Component {
    render() {
    const { count, setCount } = this.props;
      return (
      <>
        <div className="card">
        <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </>
    );
    }
  }
  export default Decrease;