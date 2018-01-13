import React from 'react';
import { connect } from 'react-redux';

export class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
        <div className="duck-container">
          I think I could do this better by using the context function to get all the things from inside of get state
        </div>
    );
  }
}

export default connect(()=>({}), ()=>({}))(SettingsContainer);
