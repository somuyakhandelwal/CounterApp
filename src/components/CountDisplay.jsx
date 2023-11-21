import React from 'react';

class Display extends React.Component {
    render(props) {
        const count = this.props.myData;
      return (
        <div className="count">
          {count}
        </div>
    );
    }
  }
  export default Display;