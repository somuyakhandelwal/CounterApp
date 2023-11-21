import React from 'react';

class Reset extends React.Component {
    render() {
    const { count, setCount } = this.props;

      return (
      <>
        <div className="card">
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </>
    );
    }
  }
  export default Reset;