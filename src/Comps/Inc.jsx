import { useSetRecoilState } from 'recoil';
import { counterAtom } from '../store/atoms/counter';
import { memo } from 'react';

const Inc = memo(() => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Inc</button>
    </div>
  );
});

export default Inc;
