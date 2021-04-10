import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function SignUp(){

    const [UsrNom, setUsrNom] = useState(null);
    const [UsrApe, setUsrApe] = useState(null);
    const [UsrEmail, setUsrEmail] = useState(null);
    const [UsrPwd, setUsrPwd] = useState(null);

    return(
        <div className="m-5 border rounded shadow-lg">
            <form className="p-5">
                <h2 className="d-flex justify-content-center">Sign Up</h2>

                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" id="UsrNom" value={UsrNom} onChange={(e)=>setUsrNom(e.target.value)} className="form-control" placeholder="Nombres" />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" id="UsrApe" value={UsrApe} onChange={(e)=>setUsrApe(e.target.value)} className="form-control" placeholder="Apellidos" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="UsrEmail" value={UsrEmail} onChange={(e)=>setUsrEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="UsrPwd" value={UsrPwd} onChange={(e)=>setUsrPwd(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Ya tienes cuenta? <a href="">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default SignUp;