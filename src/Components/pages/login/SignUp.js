import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useContext,useEffect} from 'react';
import { Context as AuthContext} from "../../Context/AuthProvider"
import { validate } from "email-validator";

function SignUp(){
    const {state,signup} = useContext(AuthContext)
  
    const [UsrEmail, setUsrEmail] = useState("");
    const [UsrPwd, setUsrPwd] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(undefined);
    
    useEffect(() => {
        if (state.errorMessage) alert(state.errorMessage) ;
      }, [state.errorMessage]);
    
      useEffect(() => {
        if (state.registered);
      }, [state]);


    const handlerVerify = () => {
       
       
            //Verificar el correo electronico
            if (!UsrEmail)
                setEmailError(true);
            else if (!validate(UsrEmail))
                setEmailError(true);
            else setEmailError(false);
       
            //Verificar la contraseña
            if (!UsrPwd)
                setPasswordError(true);
            else if (UsrPwd.length < 6)
                setPasswordError(true);
            else setPasswordError(false);
       
      
            if (
              !emailError &&
              !passwordError &&
              UsrEmail &&
              UsrPwd
            )
           { 
            signup(UsrEmail,UsrPwd);
           // alert("Cuenta creada regrese ala pantalla anterior")
        }
            else {setError("All fields are required!")
            alert(" "+UsrPwd+""+UsrEmail+"  estan vacios")
            };
          

    }


    return(
        <div className="m-5 border rounded shadow-lg">
            <form className="p-5">
                <h2 className="d-flex justify-content-center">Sign Up</h2>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="UsrEmail" value={UsrEmail}  onChange={(e)=>setUsrEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="UsrPwd" value={UsrPwd}  onChange={(e)=>setUsrPwd(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <button  type="submit" className="btn btn-primary btn-block" onClick={handlerVerify}>Sign Up</button>
                <p className="forgot-password text-right">
                    Ya tienes cuenta? <a href="/">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default SignUp;