import React from "react";
import axios from "axios";

import UserCard from "./UserCard";

class FollwerCard extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/SarahMLawrence/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.followers.map((follower) => (
          <UserCard
            login={this.state.followers.login}
            avatar_url={this.state.followers.avatar_url}
            html_url={this.state.followers.html_url}
          />
        ))}
      </div>
    );
  }
}

export default FollwerCard;
