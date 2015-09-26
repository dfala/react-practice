import React from 'react';

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <h1>This is a banner.</h1>
          <form>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
          </form>
        </div>
      </div>
    );
  }
}

export default (Banner);
