import "./input.scss";

export default function Input({name = "Unnamed"}) {
  return (
    <label className="input">
      <input className="input__field" type="text" placeholder="" />
      <span className="input__label">{name}</span>
    </label>
  );
}
