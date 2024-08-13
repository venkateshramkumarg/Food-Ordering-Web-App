import React from "react";
import UserContext from "./utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        avatar_url: "dummy",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/adventureshero3");
    const data = await response.json();
    this.setState({ userInfo: data });
  }

  render() {
    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" className="user-avatar" />
        <div className="user-info">
          <h1>{login}</h1>
          <UserContext.Consumer>{({loggedInUser})=>(<h1>{loggedInUser}</h1>)}</UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
