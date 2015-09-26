import React, { PropTypes } from 'react';
import Button from './buttons';

export class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login-form">
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <Button copy="Submit form" />
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default (SignUpForm);
