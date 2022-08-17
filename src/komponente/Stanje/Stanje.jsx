import classes from "./Stanje.module.css";
import React from 'react'

const Stanje = (props) => {
  return (
    <div className={classes["stanje-container"]}>
        <h2 className={classes.heading}>
            Ukupno: {(props.data.prihod + props.data.rashod).toLocaleString()} RSD

        </h2>
        <div className={classes["stanje-container--cards"]}>
        <div>
          <h2 className={classes.heading}>Prihodi:</h2>
          <p className={classes.prihod}>
            {props.data.prihod.toLocaleString()} RSD
          </p>
        </div>
        <div>
          <h2 className={classes.heading}>Rashodi:</h2>
          <p className={classes.rashod}>
            {props.data.rashod.toLocaleString()} RSD
          </p>
        </div>
      </div>

    </div>
  )
}

export default Stanje
