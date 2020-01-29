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
    <h3 style={{
      marginTop: "1em"
    }}>⚠ Disclaimer</h3>
    <p>
      Any URLs provided in the repos should not be used in production. You
      should follow the steps provided in the custom element's repository to
      deploy it yourself for testing.
    </p>
    <p>
      If a custom element is missing deploy instructions, or you're having
      trouble with them, please log an issue in the custom element's repository.
    </p>
    <p>
      If you wish to use them in a production project, you should perform a code
      review and fork/deploy the source code on your own as the custom elements
      in this repository are subject to change without notice.
    </p>
  </div>
);

export default Disclaimer;
