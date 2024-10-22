import Dec from "./Dec";
import CurrentCount from "./CurrentCount";
import Inc from "./Inc";
import { memo } from "react";

const Counter = memo(() => {
  return (
    <div>
      <Dec />
      <CurrentCount />
      <Inc />
    </div>
  );
});

export default Counter;
