import "../login/login.css";


const Input = ({label, onChange,name,className}) => {
    
    
    return (
    <div>
      <label htmlFor="email">{label}:</label>
      <input ref={onChange}  className={className} name={name} id={name} type="text" />
    </div>
  );
};

export default Input;
