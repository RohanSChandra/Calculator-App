import { Textfit } from "react-textfit";
import "./Screen";

const Screen = ({ value }) => {
  return (
    /* A component that is used to fit the text to the screen. */
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
