import React from 'react';
import { connect } from 'react-redux';

export class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <div className="duck-container">
          Hello
        </div>
    );
  }
}

export default connect({}, {})(SettingsContainer);
