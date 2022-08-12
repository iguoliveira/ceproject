import "./input.scss";

export default function Input({name = "Unnamed", value="", onchange="", focusout=""}) {
  return (
    <label className="input">
      <input className="input__field" type="text" placeholder="" value={value} onChange={onchange} onBlur={focusout}/>
      <span className="input__label">{name}</span>
    </label>
  );
}
