import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>Hello to {this.props.firstName} {this.props.lastName} from hello.js</div>;
  }
}

export default Hello;
