import { useRef, useState, useNavigate} from "react";
import Input from "./input";
import Header from "../header/header";
import "../login/login.css";
import { auth } from "../Firebase";



const Login = () => {
  const[point,setpoint] = useState(false);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const signin = (e)=>{
    e.perventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .the(auth=>{
      navigate('/')
    })
  }

  const register = (e)=>{
    e.perventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .the(auth=>{
      if(auth)
        {navigate('/')}
    })
  }

  return (
    <>
      <Header/>
      <div  className="form">
      <form>
        <Input onChange={email} name="email" label="Email" className='input1'/>
        <Input onChange={password} name="password" label="Password" className='input'/>
        <button disabled={setpoint} className="btn-signin" onClick={signin}>Login</button>
      </form>
      </div>
    </>
  );
};

export default Login;

