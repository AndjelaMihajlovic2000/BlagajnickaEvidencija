import { Fragment } from "react";
import classes from "./Stavka.module.css";

const Stavka = (props) => {
  return (
    <Fragment>
      <div className={classes["rashod-stavka"]}>
        <div
          className={props.amount > 0 ? classes.prihod : classes.rashod}
        ></div>
        <p className={classes["stavka-info"]}>{props.name}</p>
        <p className={classes["stavka-info"]}>{props.amount}</p>
      </div>
    </Fragment>
  );
};

export default Stavka;