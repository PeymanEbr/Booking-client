import { useState } from "react";
import { toast } from "react-toastify";
import {login} from '../actions/auth';
import LoginFrom from "../components/LoginFrom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await login({email, password});
            console.log("Send Login Data", {email, password});
            if(res.data) {
                console.log(res.data);
            }
        } catch(err) {
            console.log(err);
            if(err.response.status === 400) toast.error(err.response.data)
        }
    }

    return(
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Login</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginFrom 
                            handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;