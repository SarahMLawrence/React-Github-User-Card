import React from "react";
import axios from "axios";

class Search extends React.Component {
  state = {
    followers: [],
    searchFollower: "",
  };

  handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, getFollowers: e.target.value });
  };

  fetchFollowers = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.getFollowers}`)
      .then((res) => this.setState({ ...this.state, followers: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    console.log("rendering");
    return (
      <div className="search">
        <h1>Hello Followers: </h1>
        <input
          type="text"
          name="getFollowers"
          value={this.state.getFollowers}
          placeholder="SEARCH FOLLOWER"
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchFollowers}>Fetch Followers</button>
        <div className="followers">
          <h1>{this.state.followers.login}</h1>
          <img
            className="card-img-top"
            src={this.state.followers.avatar_url}
            alt={this.state.followers.avatar_url}
          />
        </div>
      </div>
    );
  }
}

export default Search;
