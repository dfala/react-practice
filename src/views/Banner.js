import React from 'react';
import SignUpForm from './shared/SignUpForm';

export class Banner extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="banner">
        <div className="container">
          <SignUpForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default (Banner);
