import React from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import './App.css';
class App extends React.Component {
  state = {
    user: {}, // DEFINING EMPTY ARRAY OF USER
    followers: [],
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/SarahMLawrence")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/SarahMLawrence/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <div>
          <h1>Hello</h1>
          <UserCard
            login={this.state.user.login}
            avatar_url={this.state.user.avatar_url}
            html_url={this.state.user.html_url}
            
          />
        </div>
        <div className="follower-card">
          {this.state.followers.map((followers) => (
            <UserCard
              
              avatar_url={followers.avatar_url}
              login={followers.login}
              html_url={followers.html_url}
            />
            
          ))}
        </div>
      </div>
    );
  }
}

export default App;
