import "./index.css"


export default function MovieInputs({ label, inputprops }) {
  return <>
    <div className="input-div">
      {label && <label>{label}</label>}
      <input type="text" className="form-input" {...inputprops} /> 
  </div>
  </>
  
}