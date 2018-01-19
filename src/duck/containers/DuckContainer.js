import React from 'react';
import { connect } from 'react-redux';
import api from './../../api';

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

  async componentDidMount()  {
    this.props.dispatch({type: "USER_FETCH_REQUESTED", payload: {txnID: 3}});
    this.exAsyncCall();
  }

  async exAsyncCall() {
    try {
      const users = await api('fake_data', {txnId: 3});
      const posts = await api('fake_data_2', {txnId: 3});
      console.log('users', users.body);
      console.log('posts', posts.body);
    } catch (e) {
      console.log('error', e);
    }
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
