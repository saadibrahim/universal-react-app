import React, {Component} from 'react';
import {connect} from 'react-redux';
import usersActions from '../../actions/users';
import usersSelectors from '../../selectors/users';

import _Home from './window';

class Home extends Component {
  componentDidMount() {
    const {getUsers} = this.props;
    getUsers();
  }

  render() {
    const {users} = this.props;
    return <_Home users={users} />;
  }
}

const mapStateToProps = (state) => ({
  users: usersSelectors.getUsersData(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(usersActions.getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
