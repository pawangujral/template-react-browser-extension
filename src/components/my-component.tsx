import * as React from 'react';

const SayHello: React.FC = () => {

  React.useEffect(() => {
    // Testing purpose
    chrome.tabs.create({
      url: 'onboarding.html'
    });
  },[]);
  return <h1>Hello world!</h1>;
};

export default SayHello;
