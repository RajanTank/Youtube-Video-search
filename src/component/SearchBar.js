import React from 'react'
import { label } from '../Utility /label'
import { connect } from 'react-redux';
import { signUpData } from '../actions/actionCreater';

class SearchBar extends React.Component {

  state = {
    term: ''
  };

  onLogOutClick = () => {
    let { userData } = this.props;
    userData.keepMeLoggedIn = false;
    this.props.signUpData(userData);
    this.props.history.push('/');
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui menu">
          <div className=" ui header item">{label.appName}</div>
          <div className="search-bar ui input item " style={{ width: '60%' }} >
            <div className="ui action right icon input">
              <i className="search icon" />
              <input type="text"
                onChange={(event) => this.setState({ term: event.target.value })}
                placeholder="Search" />
            </div>
          </div>
          <div className="right menu">
            <a className="item" onClick={this.onLogOutClick} href="/"> Log Out</a>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps, { signUpData })(SearchBar);