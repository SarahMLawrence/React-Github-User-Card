import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="img-wrapper">
   
   
        <img src={props.avatar_url} alt={props.avatar_url} />
        
          <h1>{props.login}</h1>
          <h1>{props.html_url}</h1>
   
      </div>
    </div>
  );
}
