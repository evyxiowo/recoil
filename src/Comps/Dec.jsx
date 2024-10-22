import { useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/atoms/counter';
import { memo } from 'react';

const Dec = memo(() => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Dec</button>
    </div>
  );
});

export default Dec;
