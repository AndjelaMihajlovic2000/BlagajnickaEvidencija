import classes from "./Ulaz.module.css";

const Ulaz = (props) => {
  return (
    <input
      className={classes.ulaz}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Ulaz;