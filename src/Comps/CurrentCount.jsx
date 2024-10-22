import { useRecoilValue } from 'recoil';
import { counterSelector } from '../store/atoms/counter';
import { memo } from 'react';

const CurrentCount = memo(() => {
  const countMessage = useRecoilValue(counterSelector);
  console.log("CurrentCount re-rendered");
  return <div>{countMessage}</div>;
});

export default CurrentCount;
