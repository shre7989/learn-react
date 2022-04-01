import React from "react";

function Api(props) {
  return (
    <li>
      <strong>API:</strong> {props.data.API} <br></br>
      <strong>Description:</strong> {props.data.Description}
      <br></br>
      <strong>Auth:</strong> {props.data.Auth} <br></br>
      <strong>HTTPS:</strong> {props.data.HTTPS ? "True" : "False"}
      <br></br>
      <strong>Cors:</strong> {props.data.Cors}
      <br></br>
      <strong>Link: </strong>
      {props.data.Link}
      <br></br>
      <strong>Category: </strong>
      {props.data.Category}
      <br></br>
    </li>
  );
}

export default Api;
