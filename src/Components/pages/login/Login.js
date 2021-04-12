import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect,useContext} from 'react'
import { Context as AuthContext} from "../../Context/AuthProvider"
import { validate } from "email-validator";

function Login(){
    const {state,signin} = useContext(AuthContext)

    const [UsrEmail, setUsrEmail] = useState("");
    const [UsrPwd, setUsrPwd] = useState("");

    const login = ()=>{
        try {
           signin(UsrEmail,UsrPwd)
        }catch (error) {
            alert ("hubo un error en login")
        }
        
    }

    useEffect(() => {
        if (state.errorMessage) alert(state.errorMessage);
      }, [state.errorMessage]);
    
    return(
        <div className="m-5 border rounded shadow-lg">
           <form className="p-5">
                <h3 className="d-flex justify-content-center">LOGIN</h3>

                <div className="form-group">
                    <label className="">Email address</label>
                    <input type="email" id="UsrEmail" value={UsrEmail} onChange={(e)=>setUsrEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="UsrPwd" value={UsrPwd} onChange={(e)=>setUsrPwd(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>
    
                <button className="btn btn-primary btn-block" onClick={login}>LOGIN</button>
                <p className="forgot-password text-right" >
                    No tienes cuenta? <a href="/signUp">sign up?</a>
                </p>
            </form>
        </div>
    )
}

export default Login;