import React from 'react';
import {NormalizeStyle, GlobalStyle} from "./components";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <NormalizeStyle/>
      <GlobalStyle/>
      {/*TODO: Add Toast*/}
      <Routes/>
    </div>
  );
}

export default App;
