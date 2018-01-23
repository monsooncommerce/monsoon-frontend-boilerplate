import React from 'react';
import PropTypes from 'prop-types';

export class DuckComponent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }
}

DuckComponent.propTypes = {
  foo: PropTypes.string.isRequired,
};

export default DuckComponent;
