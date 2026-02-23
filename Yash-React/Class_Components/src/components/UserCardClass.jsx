import React from 'react';

// A class component extends `React.Component`
class UserCardClass extends React.Component {
  // The render() method is required and returns the component's UI
  render() {
    // Props are available on `this.props`
    const { name, role } = this.props;

    const cardStyle = {
      border: '2px solid steelblue',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#eef',
      width: '300px'
    };

    return (
      <div style={cardStyle}>
        <h3>{name} (Class Component)</h3>
        <p>Role: {role}</p>
      </div>
    );
  }
}

export default UserCardClass;
