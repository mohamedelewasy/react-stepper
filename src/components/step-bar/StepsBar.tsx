import { useEffect, useState } from "react";
import style from "./style.module.css";

interface Iprop {
  steps: number;
}

export const StepsBarComponent = (props: Iprop) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (props.steps === 2) {
      setWidth(50);
    } else if (props.steps === 4) {
      setWidth(100);
    }
  }, [props.steps]);
  return (
    <>
      <div className={style.cont}>
        <div
          style={{
            width: `${width}%`,
            background: "#6244c5",
            position: "absolute",
            height: "1px",
            top: "50%",
            transition: "all 1s ease-out",
          }}
        ></div>
        <div className={`row ${style.main}`}>
          <span
            className={props.steps > 1 ? style.completed : style.notcompleted}
          >
            1
          </span>
          <span
            className={props.steps > 2 ? style.completed : style.notcompleted}
          >
            2
          </span>
          <span
            className={props.steps > 3 ? style.completed : style.notcompleted}
          >
            3
          </span>
        </div>
      </div>
    </>
  );
};
