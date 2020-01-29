import React from 'react';

const Disclaimer = () => (
  <div
    style={{
      borderLeft: '4px solid',
      background: '#fff5e6',
      color: 'rgb(100, 82, 30)',
      borderColor: '#ff9800',
      padding: '12px 15px 15px',
      margin: '5px auto',
    }}
  >
    <b>Warning</b>
    <br />
    Any URLs provided in the repos should not be used in production. You should
    follow the steps provided in the repo to deploy it yourself for testing.<br /><br />
    If a custom element is missing deploy instructions, or you're having trouble with them, please log an issue in the custom element's repository.
  </div>
);

export default Disclaimer;
