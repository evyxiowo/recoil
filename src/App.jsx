import React from "react";
import { RecoilRoot } from 'recoil';
import Counter from './Comps/Counter';

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;
