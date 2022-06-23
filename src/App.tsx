import React from 'react';
import { login, logout } from './near/utils';

const App: React.FC = () => {
  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <h1>Voting app</h1>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    );
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <button className="link" style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button>
      <main>
        <h1>{window.accountId}</h1>
      </main>
    </>
  );

  // return (
  //   <div className="App">
  //     <h1 className="text-3xl text-blue-400">App vote Hello</h1>
  //   </div>
  // );
};

export default App;
