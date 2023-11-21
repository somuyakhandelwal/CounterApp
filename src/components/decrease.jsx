import React from 'react';

class Decrease extends React.Component {
  render() {
    const { count, setCount } = this.props;

    function checkCount() {
      if (count > 0) {
        setCount(count - 1);
      }else{
        alert("Count Can't Be Zero");
      }
    }

    return (
      <>
        <div className="card">
          <button onClick={checkCount}>-</button>
        </div>
      </>
    );
  }
}

export default Decrease;
