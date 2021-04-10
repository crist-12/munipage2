import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'


function Login(){
    const [UsrEmail, setUsrEmail] = useState(null);
    const [UsrPwd, setUsrPwd] = useState(null);
    
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
    
                <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                <p className="forgot-password text-right">
                    No tienes cuenta? <a href="">sign up?</a>
                </p>
            </form>
        </div>
    )
}

export default Login;