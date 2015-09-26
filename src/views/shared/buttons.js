import React, { PropTypes } from 'react';

export class Button extends React.Component {
  render() {
    const { copy, onClick } = this.props;
    return (
      <button {...onClick}>
        {copy || 'Submit'}
      </button>
    );
  }

}


Button.propTypes = {
  onClick: PropTypes.func,
  copy: PropTypes.string
};

export default (Button);
