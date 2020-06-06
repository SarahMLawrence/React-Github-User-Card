import React from "react";

export default function Card(props) {
  return (
    <div className="card-deck">
      <div className="container">
        <div className="card">
          {/* <div className="img-wrapper"> */}

          <img
            className="card-img-top" //img
            src={props.avatar_url}
            alt={props.avatar_url}
          />
          <div class="card-body">
            <h5 className="card-title">{props.login}</h5>
            <p className="card-text">
              {props.html_url}
              <br></br>
              Followers: {props.followers}
              <br></br>
              Following: {props.following}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
