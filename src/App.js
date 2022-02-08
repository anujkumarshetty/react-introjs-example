import React from 'react';
import { Steps, Hints } from 'intro.js-react';
import './style.css';
import 'intro.js/introjs.css';

export default function App() {
  const steps = [
    {
      title: ' Welcome',
      intro: 'Welcome to react INTRO JS app',
    },
    {
      element: '#step1',
      intro: 'step 2',
    },
  ];
  const onExit = () => {};
  return (
    <div id="step1">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} />
    </div>
  );
}
