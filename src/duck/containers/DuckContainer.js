import React from 'react';
import { connect } from 'react-redux';

import { LoadingIndicator } from '@monsoon_inc/monsoon-components';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state,
  };
};

export class DuckContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.dispatch({type: 'USER_FETCH_REQUESTED', payload: {txnId: 1}});
  }

  render() {

    const jsx = this.props.users.loading ? <LoadingIndicator /> : <div className="duck-container">trains</div>;

    return (
      <div>
        {jsx}
      </div>
    );
  }
}

export default connect(mapStateToProps)(DuckContainer);
