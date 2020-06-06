import React from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import Search from "./components/Search";
import "./App.css";

class App extends React.Component {
  state = {
    user: {}, // DEFINING EMPTY ARRAY OF USER
    followers: [],
    searchFollower: "",
  };

  //==================//
  // get user profile //
  //==================//
  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/SarahMLawrence")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));

    //=========================//
    // get followers profiles  //
    //=========================//
    axios
      .get("https://api.github.com/users/SarahMLawrence/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, searchFollower: e.target.value });
  };

  fetchFollowers = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchFollower}`)
      .then((res) => this.setState({ ...this.state, followers: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <Search />
        <div>
          <UserCard
            login={this.state.user.login}
            avatar_url={this.state.user.avatar_url}
            html_url={this.state.user.html_url}
            followers={this.state.user.followers}
            following={this.state.user.following}
          />
        </div>

        <div className="follower-card">
          <h1>Followers</h1>
          {this.state.followers.map((follower) => (
            <UserCard
              avatar_url={follower.avatar_url}
              login={follower.login}
              html_url={follower.html_url}
              followers={this.state.user.followers}
              following={this.state.user.following}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
