import "./input.scss";

const defaultValue = () => {
  console.log("No value")
}

export const Input = ({name = "Unnamed", value="", onchange=defaultValue, focusout=defaultValue, readonly=true}) => {
  return (
    <label className="input">
      <input className="input__field" type="text" placeholder="" value={value} onChange={onchange} onBlur={focusout} readOnly={readonly} />
      <span className="input__label">{name}</span>
    </label>
  );
}
