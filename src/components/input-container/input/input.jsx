import "./input.scss";

export default function Input({name = "Unnamed", value="", onchange="", focusout="", readonly=true}) {
  return (
    <label className="input">
      <input className="input__field" type="text" placeholder="" value={value} onChange={onchange} onBlur={focusout} readOnly={readonly} />
      <span className="input__label">{name}</span>
    </label>
  );
}
