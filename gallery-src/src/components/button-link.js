import React from 'react';

const ButtonLink = (props) => (
  <a className="btn btn-primary" href={props.to}>{props.text}</a>
);


export default ButtonLink;